import React from 'react';
import Counter from '../counter';
import '../App.css';
import FruitLabels from '../components/FruitLabels';

function DataEntry() {
    return ( 
    <div>
        <FruitLabels></FruitLabels>
        <div className='Fruits'>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
        </div>
    </div>
    
    );
}

export default DataEntry;