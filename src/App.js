import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";
import ShowNavBar from "./Components/ShowNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShowNavBar>
          <NavBar />
        </ShowNavBar>
        
        <Routes>
          <Route path="" element={<Products />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
