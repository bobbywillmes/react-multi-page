var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello world!"
);

var Temperature = function Temperature(props) {
  console.log('props: ', props);
  return React.createElement(
    "p",
    null,
    "The current temperature in ",
    props.city,
    " is ",
    props.degree,
    " degree ",
    props.unit
  );
};

var tempElement = React.createElement(Temperature, { degree: 25, unit: "celsius" });

var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Temperature, { city: "London", degree: 20, unit: "celsius" }),
    React.createElement(Temperature, { city: "New York", degree: 25, unit: "celsius" }),
    React.createElement(Temperature, { city: "Dubai", degree: 32, unit: "celsius" })
  );
};

ReactDOM.render(
// element,
// tempElement,
React.createElement(App, null), document.getElementById('root'));