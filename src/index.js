import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";

import "./styles.css";

class App extends React.Component {
  state = {
    persons: [
      { name: "Eswar", age: 14 },
      { name: "Vikky", age: 24 },
      { name: "Deepak", age: 34 }
    ],
    otherState: "some other state."
  };
  switchNameHandler = newName => {
    // console.log('Button is Clicked!')
    this.setState({
      persons: [
        { name: newName, age: 14 },
        { name: "Dev", age: 24 },
        { name: "Deepak", age: 34 }
      ]
    });
  };
  nameChangeHandler = event => {
    // console.log('Button is Clicked!')
    this.setState({
      persons: [
        { name: "Eswar", age: 14 },
        { name: event.target.value, age: 24 },
        { name: "Deepak", age: 34 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      boxShadow: "0 2px 3px #eee",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <p>This is really working...</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Tejas")}>
          Switch Name </button> */}
        <button style={style} onClick={() => this.switchNameHandler("Tejas")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Hiral")}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi! I'm a React App</h1>
//       <p>This is still working</p>
//       <button>Switch Names</button>
//       <Person name="Eswar" age="14" />
//       <Person name="Vikky" age="24">
//         My Hobbies are: Racing
//       </Person>
//       <Person name="Deepak" age="34" />
//     </div>
//     // React.createElement("div", null, "Hello")
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
