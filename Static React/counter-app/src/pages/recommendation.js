import React from "react";
import { useLocation } from "react-router-dom";
import ItemRec from "../components/ItemRec";
import MoneyRec from "../components/MoneyRec";
import { Outlet, Link } from "react-router-dom";

export default function Recommendation() {
    let { state } = useLocation();
    const ban = state[0];
    const app = state[1];
    const pea = state[2];
    const ora = state[3];
    const price = (ban + (app * 2) + (pea * 4) + (ora * 5));
    return (
        <div>
            <div>
                <ItemRec banana={ban} apple={app} pear={pea} orange={ora}></ItemRec>
            </div>
            <div>
                <MoneyRec cost={price}></MoneyRec>
            </div>
            <>
        <nav>
            <ul>
            <li>
                <Link to="/" state={[ban, app, pea, ora]}>Data Entry</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
        </div>
    )
}