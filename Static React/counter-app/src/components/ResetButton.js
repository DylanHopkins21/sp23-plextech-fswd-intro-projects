import React from "react";

export default function ResetButton( {setBan, setApp, setPea, setOra} ) {
    return (
        <button onClick={() => {
            setBan(0)
            setApp(0)
            setPea(0)
            setOra(0)
        }}>Reset your purchases!</button>
    )
}