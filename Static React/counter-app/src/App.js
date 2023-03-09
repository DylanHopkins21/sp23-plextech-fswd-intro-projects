import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Counter from './counter';
import DataEntry from './pages/dataEntry';

function App() {
  return ( 
    <div>
      <DataEntry></DataEntry>
    </div>
  );
}

export default App;
