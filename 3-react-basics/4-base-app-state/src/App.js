import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 46 + this.props.increment
    };

  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: this.state.meaningOfLife + this.props.increment}
    },
       () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>The Meaning of Life is: {this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
