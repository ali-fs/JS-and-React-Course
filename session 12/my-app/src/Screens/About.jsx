import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { useLocation } from "react-router-dom";
import useSearchParams from "../hooks/useSearchParams";

const About = () => {
  const name = useSearchParams("name");
  const gender = useSearchParams("gender");

  return (
    <div>
      <p>This is About page</p>
      {name && <p>name: {name}</p>}
      {gender && <p>name: {gender}</p>}
    </div>
  );
};

export default About;
