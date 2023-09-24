import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [data, setData] = useState([1, 2, 3, 4]);

  const onDelete = (item) => {
    setData(data.filter((i) => i !== item));
  };

  return (
    <div>
      {data.map((item, index) => (
        <Item key={item} item={item} onClick={() => onDelete(item)} />
      ))}
    </div>
  );
}

export default App;
