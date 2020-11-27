import { useContext } from "react";
import { AppContext } from "../context/appContext";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h3>Your Items</h3>
        <ul className="list-group">
          {state.carts.map((product) => (
            <li className="list-group-item" key={product.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center ">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      width: "150px",
                      height: "100px",
                    }}
                  />
                  <div className="ml-3">
                    <h2>{product.name}</h2>
                    <p>Quntity: {product.qty}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleRemoveCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
