import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let _classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    _classes.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    _classes.push(classes.bold); // classes = ['bold']
  }

  return (
    <div className={classes.Cockpit}>
      <header className="App-header">
        <h1 className={_classes.join(" ")}> Welcome to React  { props.appTitle } </h1>
      </header>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
