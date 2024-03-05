import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";
import ShowNavBar from "./Components/ShowNavBar";
import ShowProduct from "./Components/ShowProduct";
import UpdateProduct from "./Components/UpdateProduct";
import { PostsContextProvider } from "./Components/ContextApis/PostsContext";
import Posts from "./Components/Posts";

function App() {
  return (
    <PostsContextProvider>
      <div className="App">
        <BrowserRouter>
          <ShowNavBar>
            <NavBar />
          </ShowNavBar>

          <Routes>
            {["products", "/", "home"].map((path, index) => (
              <Route path={path} element={<Products />} key={index} />
            ))}
            <Route path="products/:id" element={<ShowProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostsContextProvider>
  );
}

export default App;
