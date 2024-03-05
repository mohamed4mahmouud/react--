import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ShowProduct = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({});

  const getProduct = () => {
    axios
      .get(`http://localhost:2000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1 className="text-center">Product Details</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card"
              style={{ height: "400px", overflow: "hidden" }}
            >
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt="Product"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <img
                  src={product.thumbnail}
                  className="img-thumbnail mb-3"
                  alt={product.title}
                  style={{ height: "200px", width: "200px" }}
                />
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Stock: {product.stock}</p>
                <p className="card-text">Price: ${product.price}</p>
                <Link to="/products" className="btn btn-dark">
                  Go to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
