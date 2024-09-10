const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

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
             