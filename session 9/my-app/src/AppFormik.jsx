import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import Button from "./components/Button";

function App() {
  const [list, setList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isAscSort, setIsAscSort] = useState(true);

  const onAdd = (values) => {
    setList([...list, values]);
    // formik.setValues({
    //   name: "",
    //   family: "",
    //   email: "",
    //   age: 0,
    // });
  };

  // const [filteredList, setFilteredList] = useState("");

  // useEffect(() => {
  //   const newFilteredList = list.filter((item) =>
  //     item.name.includes(searchTerm)
  //   );
  //   setFilteredList(newFilteredList);
  // }, [searchTerm, list]);

  const onDelete = (person) => {
    const newList = list.filter((p) => p.name !== person.name);
    setList(newList);
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    family: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    age: Yup.number().min(18, "Too young!").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      family: "",
      email: "",
      age: 0,
    },
    validationSchema: formSchema,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="">
        <InputBox
          label={"name:"}
          placeholder={"Enter your name"}
          type={"text"}
          name={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <InputBox
          label={"family:"}
          placeholder={"Enter your family"}
          type={"text"}
          name={"family"}
          value={formik.values.family}
          onChange={formik.handleChange}
          error={formik.errors.family}
        />
        <InputBox
          label={"email:"}
          placeholder={"Enter your email"}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <InputBox
          label={"age:"}
          placeholder={"Enter your age"}
          type={"number"}
          name={"age"}
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />
      </div>

      <Button onClick={formik.submitForm} title="Submit" />

      <InputBox
        label={"Filter"}
        placeholder={"filter"}
        type={"text"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex items-center">
        <label className="  mb-2" htmlFor="sort">
          Ascending sort?
        </label>
        <select
          className="input"
          id="sort"
          value={isAscSort}
          onChange={(e) => {
            return setIsAscSort(e.target.value);
          }}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/*  {(filteredList.length > 0 ? filteredList : list).map((item) => { */}
      {list
        .filter((item) => item.name.includes(searchTerm))
        .sort((item1, item2) => {
          if (item1.name > item2.name) return isAscSort === "yes" ? 1 : -1;
          else return isAscSort === "yes" ? -1 : 1;
        })
        .map((item) => {
          return (
            <div key={item} className="flex items-center gap-3">
              <Button onClick={() => onDelete(item)} title="X" />
              <p>{item.name}</p>
              <p>{item.family}</p>
              <p>{item.email}</p>
              <p>{item.age}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
