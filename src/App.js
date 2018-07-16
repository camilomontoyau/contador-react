import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    contador: 0
  };

  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    const { contador } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1> contador </h1>
        <h2> cuenta {contador} </h2>

        <button onClick={this.aumentarContador}> sumar contador</button>
      </div>
    );
  }
}

export default App;
