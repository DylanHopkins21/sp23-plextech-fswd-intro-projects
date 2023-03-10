import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function Counter({fruit, setFruit}) {

  function increment() {
    setFruit(fruit + 1);
  }
  
  function decrement() {
    setFruit(fruit - 1);
  }

  return (
    <div className="App">
      <p>Count: {fruit}</p>
      <Button title={"+"} task = {increment}></Button>
      <Button title={"-"} task = {decrement}></Button>
    </div>
  );
}

export default Counter;
