import { useEffect, useMemo, useState } from "react";

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

  useEffect(() => {
    console.log("style has changed");
  }, [Style]);

  // useMemo
  // const doubled = slowFunction(number);
  const doubled = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="border rounded px-2"
      />

      <button onClick={() => setDark(!isDark)}>Toggle theme</button>

      <p style={Style}>doubled number: {doubled}</p>
    </div>
  );
}

const slowFunction = (number) => {
  console.log("calling");
  for (let i = 0; i < 2000000000; i++) {}
  return number * 2;
};

export default App;
