import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { products } from "../fakeData/products";

import ProductCard from "../components/product/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleAddToCart = (id) => {
    const filterProductById = products.find((product) => product.id === id);

    dispatch({
      type: "ADD_CART",
      payload: filterProductById,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-white">
            <h4 className="text-center">Welcome</h4>
          </div>
          <div className="card-body">
            <div className="row">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  );
};

export default Home;
