import { useSelector } from "react-redux";

const CardData = () => {
  const users = useSelector((state) => state.users);
  const agriculturalAll = useSelector((state) => state.agriculturalAll);

  let count = 0;
  agriculturalAll.map((item) => {
    if (item?.breed?.typeAgricultural === 0) count++;
    return count;
  });

  const card = [
    {
      icon: "bx bx-run",
      count: users.length,
      title: "Người dùng",
    },
    {
      icon: "bx bx-donate-blood",
      count: agriculturalAll.length,
      title: "Nông sản",
    },
    {
      icon: "bx bxs-florist",
      count: count,
      title: "Cây trồng",
    },
    {
      icon: "bx bxl-baidu",
      count: agriculturalAll.length - count,
      title: "Vật nuôi",
    },
  ];
  return card;
};
export default CardData;
