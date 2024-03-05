import React, { useContext } from "react";
import PostsContext from "./ContextApis/PostsContext";

const Posts = () => {
  let { posts } = useContext(PostsContext);
  return (
    <div>
      <h1>Posts</h1>
      {posts ? (
        posts.map((post) => {
          return (
            <div key={post.id} className="container">
              <div className="row">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Posts;
