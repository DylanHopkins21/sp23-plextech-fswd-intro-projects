import React from "react";
import ItemRec from "../components/ItemRec";
import MoneyRec from "../components/MoneyRec";

export default function Recommendation() {
    return (
        <div>
            <div>
                <ItemRec></ItemRec>
            </div>
            <div>
                <MoneyRec></MoneyRec>
            </div>
        </div>
    )
}