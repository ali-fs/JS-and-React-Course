import React from "react";
import Hello from "./Hello";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  // props
  // state

  nameList = ["Abolfazl", "Ali", "Mohammad", "Majid", "Sana"];

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    console.log("render");
    return (
      <div>
        <Hello name={"Abolfazl"} />
      </div>
    );
  }
}

export default AppComponent;
