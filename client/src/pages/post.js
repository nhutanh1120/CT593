import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/post.css";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import { getAllPost } from "./../redux/actions/postAction";
import Posts from "../components/post";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Abc");
    getAllPost();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="post">
        <div className="grid wide">
          <h5>san pham</h5>
          <div className="row">
            <div className="col l-8">
              <div className="row">
                <Posts />
              </div>
            </div>
            <div className="col l-4"></div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Post;
