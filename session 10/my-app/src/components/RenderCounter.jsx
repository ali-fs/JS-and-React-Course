import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import { useRef } from "react";

function RenderCounter() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const taskInputRef = useRef();

  const counterRef = useRef(0);

  useEffect(() => {
    counterRef.current++;
    console.log(counterRef.current);
  });

  const onTaskChange = (event) => {
    const newValue = event.target.value;
    setTask(newValue);
  };

  const onAdd = () => {
    const newList = [...list, task];
    setList(newList);
    setTask("");
    taskInputRef.current?.focus();
  };

  return (
    <form onSubmit={() => {}}>
      <InputBox
        ref={taskInputRef}
        label={"Task:"}
        placeholder={"Enter your task"}
        type={"text"}
        value={task}
        onChange={onTaskChange}
      />

      <div onClick={onAdd}>Add</div>

      {list.map((item) => {
        return <p>{item}</p>;
      })}
    </form>
  );
}

export default RenderCounter;
