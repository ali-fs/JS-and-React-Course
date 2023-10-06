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
import Counter from "../Screens/Counter";
import useAuth from "../hooks/useAuth";

const CustomRouter = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <NavBar />

      <Switch>
        <PrivateRoutes path="/profile" isAuthenticated={isLoggedIn} />

        <Route exact path="/about" component={About} />

        <Route exact path="/counter" component={Counter} />

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
