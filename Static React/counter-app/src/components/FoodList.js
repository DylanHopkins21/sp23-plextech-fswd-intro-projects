import React, { useState } from "react";
import { useEffect } from 'react';
import ResetButton from "./ResetButton";

function FoodList( {ban, app, pea, ora, setApple, setBanana, setPear, setOrange, foods, setFoods} ) {
    const usePrevious = (value) => {
        const ref = React.useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
    };
    const previousBan = usePrevious(ban);
    const previousApp = usePrevious(app);
    const previousPea = usePrevious(pea);
    const previousOra = usePrevious(ora);

    useEffect(() => handleFruit(foods, setFoods, previousBan, ban, "banana: $1 "), [ban])
    useEffect(() => handleFruit(foods, setFoods, previousApp, app, "apple: $2 "), [app])
    useEffect(() => handleFruit(foods, setFoods, previousPea, pea, "pear: $4 "), [pea])
    useEffect(() => handleFruit(foods, setFoods, previousOra, ora, "orange: $5 "), [ora])
    
    return (
        <div>
            <div>
                <a>{foods}</a>
            </div>
            <div>
                <ResetButton setApp={setApple} setBan={setBanana} setPea={setPear} setOra={setOrange} setList={setFoods}></ResetButton>
            </div>
        </div>
    )
}

function handleFruit(foods, setFoods, prev, num, fruit) {
    if (prev < num && num > 0) {
        setFoods(foods => [fruit, ...foods]);
    } else {
        let temp = [...foods];
        if (temp.indexOf(fruit) != -1) {
            temp.splice(temp.indexOf(fruit), 1);
            setFoods(temp)
        }
    }
}


export default FoodList;