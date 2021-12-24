import { useSelector } from "react-redux";
const TopCustomers = () => {
  const users = useSelector((state) => state.users);
  const agriculturalAll = useSelector((state) => state.agriculturalAll);

  let newArray = [];
  users.map((item) => {
    let success = 0;
    let agricultural = 0;
    agriculturalAll.map((agriculturalData) => {
      if (item._id === agriculturalData.administrator._id) {
        if (agriculturalData?.status === 2) success++;
        agricultural++;
      }
      return true;
    });
    const object = {
      username: item.username,
      agricultural: agricultural,
      success: success,
    };
    newArray.push(object);
    return newArray;
  });
  const topCustomers = {
    head: ["Người dùng", "nông sản", "hoàn thành"],
    body:
      newArray.length > 5
        ? newArray.slice(newArray.length - 5, newArray.length)
        : newArray,
  };
  return topCustomers;
};
export default TopCustomers;

// const topCustomers = {
//   head: ["Người dùng", "nông sản", "hoàn thành"],
//   body: [
//     {
//       username: "john doe",
//       agricultural: "490",
//       success: "70",
//     },
//     {
//       username: "frank iva",
//       agricultural: "250",
//       success: "250",
//     },
//     {
//       username: "anthony baker",
//       agricultural: "120",
//       success: "40",
//     },
//     {
//       username: "frank iva",
//       agricultural: "110",
//       success: "51",
//     },
//     {
//       username: "anthony baker",
//       agricultural: "80",
//       success: "40",
//     },
//   ],
// };
