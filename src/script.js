const element = <h1 className="greeting">Hello world!</h1>

const Temperature = (props) => {
  console.log('props: ', props);
  return <h1>The current temperature is {props.degree} degree {props.unit}</h1>;
};

const tempElement = <Temperature degree={25} unit="celsius" />;

ReactDOM.render(
  // element,
  tempElement,
  document.getElementById('root')
);