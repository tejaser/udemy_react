import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}. And I am {props.age} older.
      </p>
      {props.children ? <p>{props.children} </p> : ""}
    </div>
  );
};

export default person;
