import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Button from './components/Button';
import Counter from './counter';
import DataEntry from './pages/dataEntry';
import Index from './index';
import Layout from './pages/Layout';
import Recommendation from './pages/recommendation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/dataEntry" element={<DataEntry />} />
        <Route path="/recommendation" element={<Recommendation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
