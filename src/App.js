import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getPostById } from "./redux/reducer";

function App() {
  const { allNews, singleNews } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h2>{singleNews.id}</h2>
      {allNews.map((post, index) => (
        <div key={post.id} onClick={() => dispatch(getPostById(post.id))}>
          <h1>{post.title}</h1> <strong>{post.body}</strong>{" "}
          <p>{post.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
