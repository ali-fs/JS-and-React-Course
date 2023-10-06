import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Screens/About";
import Products from "../Screens/Products";
import Home from "../Screens/Home";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { logout, username } = useAuth();

  return (
    <nav className="my-4">
      <p>{username}</p>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={logout}>Sign out</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
