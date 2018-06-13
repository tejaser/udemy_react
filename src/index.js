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
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <p>This is really working...</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
