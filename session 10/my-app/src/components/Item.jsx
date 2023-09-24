import React, { useEffect } from "react";

const Item = ({ item, onClick }) => {
  useEffect(() => {
    console.log("+++ rendering ", item);
    return () => console.log("--- cleaning ", item);
  }, [item]);

  return <div onClick={onClick}>This is item number {item}</div>;
};

export default Item;
