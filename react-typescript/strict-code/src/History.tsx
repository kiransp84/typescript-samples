import React from "react";

import { Board , HistoryProps } from './types';


export default ({ historyItems, applyHistory }: HistoryProps): JSX.Element => {
    console.log(historyItems);
    return <>{
        historyItems ? historyItems.map((historyItem, index) => <div key={index} ><HistoryButton move={index} history={historyItem} apply={applyHistory} /> <br /> </div>) 
        : <></>
    }</> 
}

type HistoryButtonProps = {
    history : Board,
    move : number , 
    apply : Function 
}

const HistoryButton = ({ history , move, apply } : HistoryButtonProps ) => {
    if (move === 0) return <></>
    return <button type="button" onClick={() => { apply(history, move) }} >${`Go to Move {move}  `}</button>
}
