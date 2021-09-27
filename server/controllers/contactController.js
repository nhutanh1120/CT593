const ContactModel = require("./../models/Contact");

const contactControllers = {
  // @Router post /api/contact/read
  // @access private
  read: async (req, res) => {
    try {
      const contact = await ContactModel.find();

      res.json({
        success: true,
        message: "read contact success.",
        contact,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
  // @Router post /api/contact/create
  // @access private
  create: async (req, res) => {
    try {
      const { email, ...rest } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Please fill in the email.",
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Please enter the correct email format.",
        });
      }

      const emails = await ContactModel.findOne({ email });
      // check for existing email
      if (emails) {
        return res.status(400).json({
          success: false,
          message: "This email already exists.",
        });
      }

      const newContact = {
        email,
        ...rest,
      };

      const contact = new ContactModel(newContact);
      await contact.save();

      res.json({
        success: true,
        message: "create contact success.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

//regular expression
function validateEmail(email) {
  const res =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
}

module.exports = contactControllers;
