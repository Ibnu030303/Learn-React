import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    // Check if count has changed to avoid infinite updates
    if (this.state.count === 10 && prevState.count !== 10) {
      this.setState({ count: 5 });
    }
  }

  render() {
    return (
      <div className="flex items-center pb-10">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        {console.log("Render")}
      </div>
    );
  }
}

export default Counter;
