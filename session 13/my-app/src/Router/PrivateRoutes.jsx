import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Screens/About";
import Products from "../Screens/Products";
import Home from "../Screens/Home";
import Profile from "../Screens/profile/Profile";
import NavBar from "../components/Navbar";
import ProfileRouter from "./ProfileRouter";
import Page404 from "../Screens/Page404";
import { Redirect } from "react-router-dom";

function PrivateRoutes({ isAuthenticated, ...rest }) {
  const Renderer = () =>
    isAuthenticated ? (
      <ProfileRouter {...rest} />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );

  return <Route render={Renderer} />;
}

export default PrivateRoutes;
