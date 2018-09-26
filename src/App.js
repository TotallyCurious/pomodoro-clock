import React, { Component } from 'react';
import Pomodoro from './components/pomodoro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Pomodoro />
      </div>
    );
  }
}
export default App;
