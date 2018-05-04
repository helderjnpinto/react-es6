import React, { Component } from "react";

import "./Person.css";
import Radium from 'radium';


const person = props => {
  const style = {
    '@media (min-width: 500px)': {
        width: '450px',
        backgroundColor: 'rgb(241, 105, 25)'
    }
  }
  return (
    <div className="person" style={style} >
      {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
      <p onClick={props.click}>
        I'm a {props.name} with {props.age} years old!
      </p>

      <p>{props.children}</p>
      <input onChange={props.changed} />
    </div>
  );
};

export default Radium(person);
