import React from "react";

export default function ResetButton( {setBan, setApp, setPea, setOra, setList} ) {
    return (
        <button onClick={() => {
            setBan(0)
            setApp(0)
            setPea(0)
            setOra(0)
            setList([])
        }}>Reset your purchases!</button>
    )
}