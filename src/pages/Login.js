import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Login = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <div>
        State login saat ini {state.isLogin ? "Sedang Login" : "Belum Login"}
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;
