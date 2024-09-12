import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";


const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Khalifa",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Casper",
            breed: "mixed"
        }),
        React.createElement(Pet, {
            animal: "Bird",
            name: "Wunna",
            breed: "Parrot"
        }),
      ]
    )
  };
  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));
             