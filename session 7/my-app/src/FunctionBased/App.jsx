import { useEffect, useState } from "react";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("Sana");

  useEffect(() => {
    console.log("PARENT RERENDER");
  });

  return (
    <div>
      <p onClick={() => setName("Abolfazl")}>Change name</p>
      {name === "Sana" && <Hello name={name} />}
    </div>
  );
}

export default App;
