import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "../../../constants";
import PostItem from "./post/index";
import Empty from "../../utils/empty/data";
import FormPost from "./form";

const Posts = () => {
  const [state, setState] = useState([]);
  const token = useSelector((state) => state.token);
  useEffect(() => {
    async function fetchData() {
      if (!token) return;
      const response = await axios.get(apiUrl + "/post/", {
        headers: { Authorization: "Bearer " + token },
      });
      setState(response.data.posts);
    }
    fetchData();
  }, [token]);
  const onDelete = (data) => {
    const newArray = state.filter((item) => item._id !== data);
    setState(newArray);
  };
  const onCreate = (data) => {
    let newArray = [...state];
    newArray.push(data);
    setState(newArray);
  };
  const [dataUpdate, setDataUpdate] = useState(null);
  const onUpdate = (id) => {
    const newArray = state.find((item) => item._id === id);
    setDataUpdate(newArray);
  };
  const handleUpdate = (data) => {
    let newArray = [...state];
    const index = newArray.findIndex((item) => item._id === data._id);
    newArray[index] = data;
    setState(newArray);
  };
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Bài viết</h2>
      </div>
      <div className="row dashboard__body--min--height">
        <div className="col l-8">
          <div className="row">
            {state.map((item, index) => (
              <div className="col l-4" key={index}>
                <PostItem data={item} onDelete={onDelete} onUpdate={onUpdate} />
              </div>
            ))}
            {state.length === 0 && <Empty />}
          </div>
        </div>
        <FormPost
          onCreate={onCreate}
          dataUpdate={dataUpdate}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Posts;
