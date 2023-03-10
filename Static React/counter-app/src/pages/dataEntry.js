import React, { useState } from 'react';
import Counter from '../counter';
import '../App.css';
import FruitLabels from '../components/FruitLabels';
import FoodList from '../components/FoodList';

function DataEntry() {
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [pearCount, setPearCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    return ( 
    <div>
        <FruitLabels></FruitLabels>
        <div className='Fruits'>
            <Counter fruit={bananaCount} setFruit = {setBananaCount}></Counter>
            <Counter fruit={appleCount} setFruit = {setAppleCount}></Counter>
            <Counter fruit={pearCount} setFruit = {setPearCount}></Counter>
            <Counter fruit={orangeCount} setFruit = {setOrangeCount}></Counter>
        </div>
        <FoodList ban={bananaCount} app={appleCount} pea={pearCount} ora={orangeCount}></FoodList>
    </div>
    
    );
}

export default DataEntry;