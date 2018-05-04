import React, { Component } from "react";

import './Person.css';

const person = props => {
  return (
    <p className='person' onClick={props.click}>
      {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
      I'm a {props.name} with {props.age} years old!
      
      <p>{props.children}</p>
    
      <input onChange={props.changed} />
    </p>
  );
};

export default person;
