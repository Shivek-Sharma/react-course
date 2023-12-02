import { useState } from 'react'
import './App.css'

function App() {
  // we need useState to reflect the changes in the UI in React
  const [counter, setCounter] = useState(0);

  // let counter = 0; 

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

      <button onClick={increaseCounter}>Increase Counter {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrease Counter {counter}</button>

      <h3>footer: {counter}</h3>
    </>
  )
}

export default App
