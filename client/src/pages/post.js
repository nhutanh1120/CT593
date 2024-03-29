import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import PostItem from "../components//share/post/post";
import Empty from "../components/utils/empty/data";
import { apiUrl } from "../constants";
import "./../assets/css/post.css";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";

const Post = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiUrl + "/post/all");
      setState(response.data.posts);
    }
    fetchData();
  }, []);

  const [tags, setTags] = useState([]);
  useEffect(() => {
    let arrayTags = [];
    state.map((item) => (arrayTags = arrayTags.concat(item.tags)));
    setTags([...new Set(arrayTags)]);
  }, [state]);
  return (
    <div className="App">
      <Header />
      <div className="post">
        <div className="grid wide">
          <div className="row">
            <div className="l-8">
              <h5 className="post__header">phù hợp với bạn</h5>
              <div className="row">
                {state.map((item, index) => (
                  <div className="col l-4" key={index}>
                    <PostItem data={item} path="post" />
                  </div>
                ))}
                {state.length === 0 && <Empty />}
              </div>
            </div>
            <div className="post__theme">
              <h2>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h2>
              {tags.map((item, index) => (
                <div key={index} className="post__theme__item">
                  {item}
                </div>
              ))}
              {state.length === 0 && (
                <div className="post__theme__item">không có dử liệu</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Post;
