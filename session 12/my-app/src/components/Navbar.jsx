import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Screens/About";
import Products from "../Screens/Products";
import Home from "../Screens/Home";

const NavBar = ({ username }) => {
  const signOut = () => {
    localStorage.removeItem("name");
  };
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
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={signOut}>Sign out</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
