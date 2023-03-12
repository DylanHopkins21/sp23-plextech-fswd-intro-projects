import React from "react";

export default function ItemRec( {banana, apple, pear, orange} ) {
    const low = Math.min(banana, apple, pear, orange);
    if (low == orange) {
        return (
            <a>You should buy an orange! You need more!</a>
        );
    } else if (low == pear){
        return (
            <a>You should buy a pear! You need more!</a>
        );
    } else if (low == apple){
        return (
            <a>You should buy an apple! You need more!</a>
        );
    } else {
        return (
            <a>You should buy a banana! You need more!</a>
        );
    }
}