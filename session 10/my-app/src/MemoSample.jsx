import { useCallback, useEffect, useMemo, useState, memo } from "react";

const List = ({ getList }) => {
  const [items, setItems] = useState([]);

  console.log("re-rendering");

  useEffect(() => {
    setItems(getList());
  }, [getList]);

  return items.map((item) => <p key={item}>{item}</p>);
};

const MemorizedList = memo(List);

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

  const getList = useCallback(() => {
    return [+number, +number + 1, +number + 2];
  }, [number]);

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

      <MemorizedList getList={getList} />
    </div>
  );
}

export default App;
