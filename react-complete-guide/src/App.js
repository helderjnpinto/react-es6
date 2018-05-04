import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "a", age: 1 },
      { name: "b", age: 2 },
      { name: "c", age: 3 }
    ],
    otherState: "some other value",
    showPersons: false
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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "AA", age: 1 },
        { name: event.target.value, age: 2 },
        { name: "CCC", age: 3 }
      ]
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice(); copy arr
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }


  tooglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid teal",
      padding: "8px",
      cursor: "pointer",
      color: "teal"
    };

    let persons;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            // two binding
            // click={() => this.handleClick("Max!!")} //  more inefficient
            // click={this.handleClick.bind(this, "Max!!")} //  more efficient
            click={this.deletePersonHandler.bind(this, index)}
            changed={this.nameChangeHandler}
          />
        );
      });
      <div />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button style={style} onClick={this.tooglePersonHandler}>
          Swith name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
