import { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    family: "",
    age: 0,
  });

  const [formError, setFormError] = useState({
    name: false,
    family: false,
    age: false,
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <InputBox
        label={"name:"}
        placeholder={"Enter your name"}
        type={"text"}
        name={"name"}
        value={formData.name}
        onChange={onInputChange}
        error={formError.name}
      />
      <InputBox
        label={"age:"}
        placeholder={"Enter your age"}
        type={"number"}
        name={"age"}
        value={formData.age}
        onChange={onInputChange}
        error={formError.age}
      />
      <InputBox
        label={"family:"}
        placeholder={"Enter your family"}
        type={"text"}
        name={"family"}
        value={formData.family}
        onChange={onInputChange}
        error={formError.family}
      />
    </div>
  );
}

export default App;
