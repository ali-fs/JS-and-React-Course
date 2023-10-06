import { useCallback, useEffect, useMemo, useState, memo } from "react";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState([]);
  const [addResult, setAddResult] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setResult(res.data.products);
    } catch (e) {
      console.error(e);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };
  const addNew = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.post(
        "https://dummy.restapiexample.com/api/v1/create",
        {
          data: { name: "sana", salary: "456", age: "18" },
        }
      );
      setAddResult(res.data.data);
    } catch (e) {
      console.error(e);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <button onClick={addNew}>ADD NEW</button>
      <button onClick={fetchData}>FETCH</button>
      <p>{JSON.stringify(addResult)}</p>
      {result.length > 0 && <p>{JSON.stringify(result)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
