import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calculator></Calculator>
      </header>
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }
  handleClick() {
    //do something
  }
  
  handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value
    });
  }

  calculate = (e) => {
    fetch(`/api/${e.target.id}/${this.state.num1}/${this.state.num2}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ result: data.result });
    })
    .catch(console.log);
  }

  render() {
    return (
    <div>
      <div>Number 1: <input id="num1" type="text" onChange={e => this.handleChange(e)}/></div>
      <div>Number 2: <input id="num2" type="text" onChange={e => this.handleChange(e)}/></div>
      <div>
        <button id="add" type="submit" onClick={this.calculate}>Add</button>
        <button id="subtract" type="submit" onClick={this.calculate}>Subtract</button>
        <button id="multiply" type="submit" onClick={this.calculate}>Multiply</button>
        <button id="divide" type="submit" onClick={this.calculate}>Divide</button>
      </div>
      <div>Result: {this.state.result}</div>
    </div>)
  }
}

export default App;
