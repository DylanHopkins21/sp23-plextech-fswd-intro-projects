import React from "react";

export default function ItemRec( {ban, app, pea, ora} ) {
    const low = Math.min(ban, app, pea, ora);
    if (low == ora) {
        return (
            <a>You should buy an orange! You need more!</a>
        );
    } else if (low == pea){
        return (
            <a>You should buy a pear! You need more!</a>
        );
    } else if (low == app){
        return (
            <a>You should buy an apple! You need more!</a>
        );
    } else {
        return (
            <a>You should buy a banana! You need more!</a>
        );
    }
}