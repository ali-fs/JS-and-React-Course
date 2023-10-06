import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const signin = () => {
    localStorage.setItem("name", "mohammad");
  };

  const toAbout = () => {
    history.push("/About?name=sana&gender=female");
  };

  return (
    <div>
      <button onClick={signin}>SignIn</button>
      <p>This is Home page</p>
      <button onClick={toAbout}>navigate to About</button>
    </div>
  );
};

export default Home;
