import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
      persons: [
        {name: 'a', age: 1 },
        {name: 'b', age: 2 },
        {name: 'c', age: 3 },
      ]
  }

  handleClick = () => {
    this.setState({ persons: [
      {name: 'AAA', age: 2 },
      {name: 'BBB', age: 2 },
      {name: 'CCC', age: 2 },
    ] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>Swith name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
    );
  }
}

export default App;
