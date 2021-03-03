const element = <h1 className="greeting">Hello world!</h1>

const Temperature = (props) => {
  console.log('props: ', props);
  return <p>The current temperature in {props.city} is {props.degree} degree {props.unit}</p>;
};

const tempElement = <Temperature degree={25} unit="celsius" />;

const App = () => {
  return (
    <div>
      <Temperature city="London" degree={20} unit="celsius" />
      <Temperature city="New York" degree={25} unit="celsius" />
      <Temperature city="Dubai" degree={32} unit="celsius" />
    </div>
  );
}

ReactDOM.render(
  // element,
  // tempElement,
  <App />,
  document.getElementById('root')
);