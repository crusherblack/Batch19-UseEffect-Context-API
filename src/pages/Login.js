import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGIN",
    });

    router.push("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1 className="text-center">Silahkan Login</h1>
          <form onSubmit={(e) => handleLogin(e)}>
            <div class="form-group">
              <input
                type="email"
                placeholder="Input Email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Input Password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
