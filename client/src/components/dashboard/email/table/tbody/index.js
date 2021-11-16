import React, { useEffect, useState } from "react";

const TbodyData = ({ item, index, isCheck, addSendMail, deleteSendEmail }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(isCheck);
  }, [isCheck]);
  const handleChange = (e) => {
    console.log([e.target]);
    if (e.target.checked) {
      setState(!state);
      addSendMail(item.email);
    } else {
      setState(!state);
      deleteSendEmail(item.email);
    }
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name={"check" + index}
          value={state}
          checked={state}
          onChange={handleChange}
        />
      </td>
      <td>{index + 1}</td>
      <td>{item.username}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
    </tr>
  );
};

export default TbodyData;
