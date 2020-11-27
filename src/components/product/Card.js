import { useHistory } from "react-router-dom";

const Card = ({ product, handleAddToCart }) => {
  const router = useHistory();
  const { id, name, description, imageUrl } = product;

  return (
    <div className="col-md-3 ">
      <div className="card mb-3">
        <div className="card-body">
          <img
            src={imageUrl}
            alt={name}
            className="img-fluid"
            style={{
              height: "150px",
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/product/${id}`)}
          />
        </div>
        <button
          className="btn btn-dark btn-block"
          style={{
            borderRadius: 0,
          }}
          onClick={() => handleAddToCart(id)}
        >
          Add To Cart
        </button>
        <div className="card-footer bg-white text-center">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
