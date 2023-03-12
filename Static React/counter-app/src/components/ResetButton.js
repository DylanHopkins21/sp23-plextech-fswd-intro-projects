import React from "react";

export default function ResetButton() {
    return (
        <button onClick={() => window.location.reload()}>Reset your purchases!</button>
    )
}