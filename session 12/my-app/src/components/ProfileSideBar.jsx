import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Screens/About";
import Products from "../Screens/Products";
import Home from "../Screens/Home";

const ProfileSideBar = () => {
  return (
    <nav className="my-4">
      <ul className="gap-4">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/profile/orders">Orders</Link>
        </li>
        <li>
          <Link to="/profile/edit">Edit</Link>
        </li>
        <li>
          <Link to="/profile/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileSideBar;
