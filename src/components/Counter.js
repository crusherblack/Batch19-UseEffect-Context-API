const Counter = (props) => {
  console.log(props);
  const { counter, setCounter } = props;

  const handleIncreament = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  console.log("render counter component");

  return (
    <>
      <button onClick={handleIncreament}>Increament</button>
      <div>ini adalah counter: {counter}</div>
    </>
  );
};

export default Counter;
