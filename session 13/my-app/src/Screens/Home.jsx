import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const history = useHistory();
  const { login } = useAuth();

  const toAbout = () => {
    history.push("/About?name=sana&gender=female");
  };

  return (
    <div>
      <button onClick={() => login("Ali")}>SignIn</button>
      <p>This is Home page</p>
      <button onClick={toAbout}>navigate to About</button>
    </div>
  );
};

export default Home;
