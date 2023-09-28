import { useCallback, useEffect, useMemo, useState, memo } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount((count) => count + 1);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}

export default Counter;
