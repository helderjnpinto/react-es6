import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Person name='Helder' age="29"/>
        <Person name='Emanuel' age="40"/>
        <Person name='Xavi' age="22"/>
      </div>
    );
  }
}

export default App;
