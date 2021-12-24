import { useSelector } from "react-redux";
import moment from "moment";

const statusContent = (number) => {
  switch (number) {
    case 2:
      return {
        status: "shipping",
        content: "sản xuất",
      };
    case 3:
      return {
        status: "pending",
        content: "phân phối",
      };
    case 4:
      return {
        status: "paid",
        content: "chế biến",
      };
    case 5:
      return {
        status: "refund",
        content: "bán lẻ",
      };
    default:
      return {
        status: "shipping",
        content: "producer",
      };
  }
};
const LatestAgricultural = () => {
  const agriculturalAll = useSelector((state) => state.agriculturalAll);
  const users = useSelector((state) => state.users);
  const agricultural =
    agriculturalAll.length > 5
      ? agriculturalAll.slice(
          agriculturalAll.length - 5,
          agriculturalAll.length
        )
      : agriculturalAll;

  let newArray = [];
  agricultural.map((item) => {
    const user = users.find((user) => user._id === item.administrator._id);
    let statusData = statusContent(user?.role);
    const object = {
      id: "#" + item._id,
      user: item?.administrator?.surname + " " + item?.administrator.forename,
      date: moment(item.updatedAt).format("DD.MM.YYYY"),
      name: item.breed.nameBreed,
      status: statusData.status,
      content: statusData.content,
    };
    newArray.push(object);
    return newArray;
  });

  return {
    header: ["# ID", "người dùng", "tên nông sản", "ngày", "vai trò"],
    body: newArray.reverse(),
  };
};
export default LatestAgricultural;
// const latestAgricultural = {
//   header: ["# ID", "người dùng", "tên nông sản", "ngày", "vai trò"],
//   body: [
//     {
//       id: "#OD1711",
//       user: "john doe",
//       date: "17 Jun 2021",
//       name: "Succulent Seeds",
//       status: "shipping",
//       content: "producer",
//     },
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       name: "Nature Hills",
//       status: "paid",
//       content: "success",
//     },
//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       name: "Rise with the Sun",
//       status: "pending",
//       content: "pending",
//     },
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       name: "Location Irrigation",
//       status: "paid",
//       content: "success",
//     },
//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       name: "New Ag",
//       status: "refund",
//       content: "cancel",
//     },
//   ],
// };
