import { useState } from "react";
import Item from "../components/Item";

function App() {
  const [data, setData] = useState([1, 2, 3, 4]);

  const addToTop = () => {
    setData([data.length + 1, ...data]);
  };
  const addToBottom = () => {
    setData([...data, data.length + 1]);
  };

  return (
    <div>
      <button onClick={addToTop}>Add to top</button>
      <button onClick={addToBottom}>Add to bottom</button>

      {data.map((item, index) => (
        <div key={item} className="m-2">
          <span>{item}</span>
          <input className="mx-2 border border-red-500" defaultValue={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
