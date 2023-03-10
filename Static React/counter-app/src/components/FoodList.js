import React, { useState } from "react";
import { useEffect } from 'react';

function FoodList( {ban, app, pea, ora} ) {
    const [foods, setFoods] = useState({
        banana: 0,
        apple: 0,
        pear: 0,
        orange: 0
      });
    useEffect(() => {setFoods()}, [ban])
    useEffect(() => {foods.map((apple), app)}, [app])
    useEffect(() => {foods.map((pear), pea)}, [pea])
    useEffect(() => {foods.map((orange), ora)}, [ora])

    function handleIncrease() {

    }
    
    return (
        <div>
            <a>{foods}</a>
        </div>
    )
}

export default FoodList;