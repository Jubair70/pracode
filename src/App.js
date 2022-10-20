import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      userInput: { key: -1, value: "" },
    };
  }
  addItem(userInput) {
    if (userInput.value !== "") {
      const addToList = [...this.state.item, userInput];
      this.setState({ userInput: { key: -1, value: "" }, item: addToList });
    }
  }
  removeItem(idx) {
    const item = this.state.item.filter((item, index) => {
      return item.key !== idx;
    });
    this.setState({ item: [...item] });
  }
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <hr />
        <input
          type="text"
          value={this.state.userInput.value}
          onChange={(e) =>
            this.setState({
              ...this.state,
              userInput: { key: Math.random(), value: e.target.value },
            })
          }
        />
        <button onClick={() => this.addItem(this.state.userInput)}>ADD</button>

        <ul>
          {this.state.item.map((elem, index) => {
            return (
              <li key={elem.key} onClick={() => this.removeItem(elem.key)}>
                {elem.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
