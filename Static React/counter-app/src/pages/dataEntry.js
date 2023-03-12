import React, { useState } from 'react';
import Counter from '../counter';
import '../App.css';
import { Outlet, Link, useLocation } from "react-router-dom";
import FruitLabels from '../components/FruitLabels';
import FoodList from '../components/FoodList';
import ResetButton from '../components/ResetButton';
import { useEffect } from 'react';

function DataEntry() {
    let { state } = useLocation();
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [pearCount, setPearCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (state != null) {
            setBananaCount(state[0]);
            setAppleCount(state[1]);
            setPearCount(state[2]);
            setOrangeCount(state[3]);
            setList(state[4]) 
        }
    }, [])
    return ( 
    <div>
        <FruitLabels></FruitLabels>
        <div className='Fruits'>
            <Counter fruit={bananaCount} setFruit = {setBananaCount}></Counter>
            <Counter fruit={appleCount} setFruit = {setAppleCount}></Counter>
            <Counter fruit={pearCount} setFruit = {setPearCount}></Counter>
            <Counter fruit={orangeCount} setFruit = {setOrangeCount}></Counter>
        </div>
        <FoodList ban={bananaCount} app={appleCount} pea={pearCount} ora={orangeCount} 
        setApple={setAppleCount} setBanana={setBananaCount} setPear={setPearCount} 
        setOrange={setOrangeCount} foods={list} setFoods={setList}></FoodList>
        <>
        <nav>
            <ul>
            <li>
                <Link to="/recommendation" state={[bananaCount, appleCount, pearCount, orangeCount, list]}>Recommendations</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
    </div>
    
    );
}

export default DataEntry;