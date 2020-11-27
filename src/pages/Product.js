import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../fakeData/products";
import Navbar from "../components/Navbar";

const Product = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const productById = products.find((product) => product.id == id);
    console.log(productById);
    setProduct(productById);
  }, []);

  return !product ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid"
              style={{
                height: "600px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card h-100">
              <div className="card-body">
                <h3>Title: {product.name}</h3>
                <h4>Description: {product.description}</h4>
                <button className="btn btn-success">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
