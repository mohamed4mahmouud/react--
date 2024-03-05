import React, { useEffect, useState } from "react";
import useFetch from "../Fetch.js";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [url, getData] = useFetch("http://localhost:2000/products");
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getData();
    setProducts(data);
  };

  const deleteProduct = (prodId) => {
    axios
      .delete(`http://localhost:2000/products/${prodId}`)
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products Component</h1>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-md-4 card"
            style={{ width: "18rem", margin: "5px" }}
          >
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
              style={{ height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: {product.price}$</p>
              <p className="card-text">Stock: {product.stock}</p>
              <button
                className="btn btn-dark me-2"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
              <Link
                className="btn btn-dark my-2 me-2"
                to={`/update/${product.id}`}
              >
                Update
              </Link>
              <Link className="btn btn-dark" to={`${product.id}`}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
