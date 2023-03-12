import React from "react";

export default function MoneyRec( {cost} ) {
    if (cost > 12) {
        return (
            <a>You should buy a banana! It's cheap!</a>
        );
    } else {
        return (
            <a>You should buy an orange! You've barely spent anything!</a>
        );
    }
}