import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // props
  // state // Immutable

  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>

        <p>Count is {this.state.count}</p>

        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Hello;
