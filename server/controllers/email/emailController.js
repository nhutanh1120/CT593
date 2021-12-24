const sendMultiEmail = require("./sendMultiEmail");

const emailControllers = {
  // @Router post /api/email/send
  // @access private
  send: async (req, res) => {
    try {
      const { address, name, title, description } = req.body;
      address.map((item) => sendMultiEmail(item, name, title, description));
      res.json({
        success: true,
        message: "send email success.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  },
};

module.exports = emailControllers;
