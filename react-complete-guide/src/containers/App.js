import React, { Component } from "react";
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
// import ErrorBoundary from "./ErrorBoundery/ErrorBoundary"; only for test do not use every where
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "a", age: 1 },
      { id: "2", name: "b", age: 2 },
      { id: "3", name: "c", age: 3 }
    ],
    otherState: "some other value",
    showPersons: true
  };

  nameChangeHandler = (e, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });
    const person = { ...this.state.persons[personIndex] }; // copy the person
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
    this.setState({ persons });
  };

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
      persons = (
        // <ErrorBoundary key={person.id}> only visible in prod mode
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
        // </ErrorBoundary>
      );
      style.backgroundColor = "cyan";
      style.color = "black";
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
