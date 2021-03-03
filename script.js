var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello world!"
);

var Temperature = function Temperature(props) {
  console.log('props: ', props);
  return React.createElement(
    "h1",
    null,
    "The current temperature is ",
    props.degree,
    " degree ",
    props.unit
  );
};

var tempElement = React.createElement(Temperature, { degree: 25, unit: "celsius" });

ReactDOM.render(
// element,
tempElement, document.getElementById('root'));