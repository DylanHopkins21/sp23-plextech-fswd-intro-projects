import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>Count: {count}</p>
      <Button title={"+"} task = {increment}></Button>
      <Button title={"-"} task = {decrement}></Button>
    </div>
  );
}

export default App;
