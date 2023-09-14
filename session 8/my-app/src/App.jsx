import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import { useRef } from "react";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const taskInputRef = useRef();

  const onTaskChange = (event) => {
    const newValue = event.target.value;
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(newValue)) setTask(newValue);

    // const char = newValue[newValue.length - 1];
    // if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
    //   setTask(newValue);
  };

  const onAdd = () => {
    const newList = [...list, task];
    setList(newList);
    setTask("");
    taskInputRef.current?.focus();
  };

  const onDelete = (task) => {
    const newTaskList = list.filter((t) => t !== task);
    setList(newTaskList);
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
        return (
          <div>
            <span onClick={() => onDelete(item)}>delete {"     "}</span>
            <span>{item}</span>
          </div>
        );
      })}
    </form>
  );
}

export default App;
