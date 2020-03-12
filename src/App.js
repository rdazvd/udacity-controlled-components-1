import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  static propTypes = {
    echo: PropTypes.string.isRequired
  };
  state = {
    echo: ''
  };
  onInputChange = (inputValue) =>
	this.setState({
      echo: inputValue.trim()
    });
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.echo}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.echo}</p>
        </div>
      </div>
    );
  }
}

export default App;
