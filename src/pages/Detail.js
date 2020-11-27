import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../fakeData/products";

const Detail = () => {
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
    <div>
      <h1>title: {product.name}</h1>
      <h1>title: {product.description}</h1>
    </div>
  );
};

export default Detail;
