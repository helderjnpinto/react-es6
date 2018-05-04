import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "a", age: 1 },
      { name: "b", age: 2 },
      { name: "c", age: 3 }
    ]
  };

  handleClick = (name = "") => {
    this.setState({
      persons: [
        { name: "AA", age: 1 },
        { name: "BB", age: 2 },
        { name: "CCC", age: 3 }
      ]
    });
  };


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "AA", age: 1 },
        { name: event.target.value, age: 2 },
        { name: "CCC", age: 3 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>Swith name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // two binding 

          // click={() => this.handleClick("Max!!")} //  more inefficient
          click={this.handleClick.bind(this, "Max!!")} //  more efficient


          changed={this.nameChangeHandler}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
