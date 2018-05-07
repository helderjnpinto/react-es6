import React, { Component } from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((person, index) => {
        return (
          // <ErrorBoundary key={person.id}> only visible in prod mode
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              // two binding
              // click={() => this.handleClick("Max!!")} //  more inefficient
              // click={this.handleClick.bind(this, "Max!!")} //  more efficient
              click={() => {props.clicked(index)} }
              changed={(event) => {
                props.changed(event, person.id);
              }}
            />
          // </ErrorBoundary>
        );
      })
);


export default persons;