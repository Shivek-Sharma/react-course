import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 0;

  // In React, we need a state to re-render the component whenever the state changes, so that changes can be reflected in the UI
  const [counter, setCounter] = useState(0);

  // We don't need a state for this because it is fully dependent on the counter state
  let multipliedCounter = counter * 5;

  const increaseCounter = () => {
    // counter = counter + 1; //counter will be updated but it won't be reflected in the UI

    // This code block will not update the counter 4 times, instead it will only update it by one
    /*
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); //only this setCounter will be considered (final state change in a batch)
    */

    // This code block will update the counter 4 times
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    console.log("Counter Increased", counter);
  }

  const decreaseCounter = () => {
    // counter = counter - 1;

    if (counter >= 1)
      setCounter((prevCounter) => prevCounter - 1);

    console.log("Counter Decreased", counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <h2>{counter} X 5 = {multipliedCounter}</h2>

      <button onClick={increaseCounter}>Counter + 4</button>
      <br />
      <button onClick={decreaseCounter}>Counter - 1</button>

      <h3>Current Value: {counter}</h3>
    </>
  )
}

export default App
