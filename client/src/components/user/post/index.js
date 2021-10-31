import React, { useEffect } from "react";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPostRequest(dispatch);
  }, [dispatch]);
  return <div></div>;
};

export default Post;
