import React, { Component } from "react";
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
// import ErrorBoundary from "./ErrorBoundery/ErrorBoundary"; only for test do not use every where

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
    let btnClass = "";

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

      btnClass = classes.Red;
    }
    let _classes = [];

    if (this.state.persons.length <= 2) {
      _classes.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      _classes.push(classes.bold); // classes = ['bold']
    }

    return (
      <div className={classes.App}>
        <header className="App-header">
          <h1 className={_classes.join(" ")}> Welcome to React </h1>
        </header>
        <button className={btnClass} onClick={this.tooglePersonHandler}>
          Toggle persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
