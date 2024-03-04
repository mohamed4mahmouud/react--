import React, { useCallback, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  let [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    thumbnail: "https://source.unsplash.com/random",
  });

  let handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setProduct((old) => ({
      ...old,
      [name]: value,
    }));
  });

  const addProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/products", product)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Add New Product</h1>
      <form action="" onSubmit={addProduct}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
          <label for="floatingInput">Product Title</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
          <label for="floatingInput">Product Description</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Image"
            name="thumbnail"
            value={product.thumbnail}
            onChange={handleChange}
          />
          <label for="floatingInput">Product Image</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <label for="floatingInput">Product Price</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
          <label for="floatingInput">Product Stock</label>
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
