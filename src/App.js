import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    }
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange() {
    return this.setState({
      color: this.state.color === 'blue' ? 'green' : 'blue',
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello!
        </p>
        <h4 className={this.state.color} onClick={this.handleColorChange}>What color am I?</h4>
      </div>
    );
  }
}

export default App;
