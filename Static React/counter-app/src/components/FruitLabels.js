import React from 'react';
import Banana from './banana.png';
import Apple from './apple.png';
import Pear from './pear.png';
import Orange from './orange.png';

function FruitLabels() {
    return (
        <div>
            <div className='Fruits'>
                <img src={Banana}></img>
                <img src={Apple}></img>
                <img src={Pear}></img>
                <img src={Orange}></img>
            </div>
            <div className='Fruits'>
                <a>$1</a>
                <a>$2</a>
                <a>$4</a>
                <a>$5</a>
            </div>
        </div>
    );  
}

export default FruitLabels;