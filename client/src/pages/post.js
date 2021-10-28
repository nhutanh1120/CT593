import React from "react";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/post.css";

const Post = () => {
  return (
    <div className="App">
      <Header />
      <div className="post">
        <div className="grid wide">
          <h5>san pham</h5>
          <p></p>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Post;
