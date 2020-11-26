import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";
//pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

//components
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
