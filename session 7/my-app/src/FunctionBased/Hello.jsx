import { useEffect, useState } from "react";

function Hello({ name }) {
  const [count, setCount] = useState(0);
  // read name from props
  // define count state // useState

  // componentDidMount
  // componentWillUnMount
  useEffect(() => {
    console.log("useEffect componentDidMount");

    return () => {
      console.log("componentWillUnMount");
    };
  }, []);

  // componentDidUpdate for Count
  useEffect(() => {
    console.log("useEffect count", count);

    const cleanupFunction = () => {
      console.log("useEffect count Cleanup", count);
    };

    return cleanupFunction;
  }, [count]);

  // componentDidUpdate for name
  useEffect(() => {
    console.log("useEffect name");
  }, [name]);

  return (
    <div>
      <p>Hello {name}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <p>Count is {count}</p>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Hello;
