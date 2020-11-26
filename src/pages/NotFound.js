import { useHistory } from "react-router-dom";

const NotFound = () => {
  const router = useHistory();

  const redirect = () => {
    router.push("/");
  };

  //LINK render
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "90vh",
      }}
    >
      <button className="btn btn-success" onClick={redirect}>
        Kembali ke Home
      </button>
    </div>
  );
};

export default NotFound;
