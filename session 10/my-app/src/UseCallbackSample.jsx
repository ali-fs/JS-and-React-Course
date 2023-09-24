import { useCallback, useEffect, useMemo, useState } from "react";

const List = ({ getList }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getList(3));
  }, [getList]);

  return items.map((item) => <p key={item}>{item}</p>);
};

function App() {
  const [number, setNumber] = useState(1);
  const [isDark, setDark] = useState(false);

  const Style = useMemo(
    () => ({
      backgroundColor: isDark ? "#333" : "#fff",
      color: isDark ? "#fff" : "#333",
    }),
    [isDark]
  );

  // const getList = () => {
  //   console.log("calling");
  //   return [+number, +number + 1, +number + 2];
  // };

  const getList = useCallback(
    (step) => {
      console.log("calling");
      return [+number + step, +number + step + 1, +number + step + 2];
    },
    [number]
  );

  return (
    <div>
      <p style={Style}>Hello</p>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="border rounded px-2"
      />

      <button onClick={() => setDark(!isDark)}>Toggle theme</button>

      <List getList={getList} />
    </div>
  );
}

export default App;
