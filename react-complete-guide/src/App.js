import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "a", age: 1 },
      { id: '2', name: "b", age: 2 },
      { id: '3', name: "c", age: 3 }
    ],
    otherState: "some other value",
    showPersons: true
  };

 
  nameChangeHandler = (e, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return (p.id === personId);
    });
    const person = {...this.state.persons[personIndex]}; // copy the person 
    // const person = Object.assign({}, this.state.persons[personIndex]); // other valid copy method
    person.name = e.target.value;

    // change de old one 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
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
            key={person.id}
            name={person.name}
            age={person.age}
            // two binding
            // click={() => this.handleClick("Max!!")} //  more inefficient
            // click={this.handleClick.bind(this, "Max!!")} //  more efficient
            click={this.deletePersonHandler.bind(this, index)}
            changed={ (event) => {this.nameChangeHandler(event, person.id)} }
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
          Toggle persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
