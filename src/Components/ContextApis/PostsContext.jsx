import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  let { children } = props;

  let [posts, setPosts] = useState(null);
  let GetPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetPosts();
  }, []);

  const ContextValue = useMemo(() => ({ posts }), [posts]);

  return (
    <PostsContext.Provider value={ContextValue}>
      {children}
    </PostsContext.Provider>
  );
};
export default PostsContext;
