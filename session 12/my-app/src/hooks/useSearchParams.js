import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const useSearchParams = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export default useSearchParams;
