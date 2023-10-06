import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Screens/About";
import Products from "../Screens/Products";
import Product from "../Screens/Product";
import Home from "../Screens/Home";
import Login from "../Screens/Auth/Login";
import Profile from "../Screens/profile/Profile";
import NavBar from "../components/Navbar";
import PrivateRoutes from "./PrivateRoutes";
import Page404 from "../Screens/Page404";
import ProfileRouter from "./ProfileRouter";

const CustomRouter = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username);
  }, []);

  return (
    <Router>
      <NavBar username={username} />

      <Switch>
        <PrivateRoutes path="/profile" isAuthenticated={!!username} />

        <Route exact path="/about" component={About} />

        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/product/:productId">
          <Product />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default CustomRouter;
