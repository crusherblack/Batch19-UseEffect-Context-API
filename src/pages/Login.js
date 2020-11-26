import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Login = () => {
  const [state, dispatch] = useContext(AppContext);

  console.log(state);

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  return (
    <div>
      <div>
        State login saat ini {state.isLogin ? "Sedang Login" : "Belum Login"}
        <button className="btn btn-primary" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
