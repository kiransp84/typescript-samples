import React, { useState } from "react";

import Board from "./Board";
import History from "./History";
import { Board as BoardType , Player } from "./types";

const DEFAULT_VALUES: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const initialState : BoardType = {
    squares: DEFAULT_VALUES, 
    currentPlayer: 1
}
// simplified 
// const initialHistory : BoardType[] =  [];

export default () => {

    
    const [board, setBoard] = useState(initialState);

    // this also is working code 
    // const [history, setHistory] = useState(initialHistory);
    const [history, setHistory] = useState< BoardType[] | [] >([]);

    const updateSquares = (index : number , currentPlayer : Player ) => {
        const newSquares  = [...board.squares];
        newSquares[index] = currentPlayer == 1 ? 'X' : 'O';
        console.log('newSquares ', newSquares);
        const newBoard : BoardType = { squares: newSquares, currentPlayer };
        setBoard(newBoard);
        updateHistory(newBoard)
    }

    const updateHistory = (board : BoardType ) => {
        setHistory(history.splice(history.length , 0 , board));
    }

    const populateHistory = (board : BoardType , move : number ) => {
        console.log(' user is going to  ', board);
        setBoard(board);
        const newHistory = history.splice(move);
        setHistory(newHistory);
    }

    return (
    <div className="game">
        <div className="game-board">
            <Board squares={board.squares} currentPlayer={board.currentPlayer} updateSquares={updateSquares} />
        </div>
        <div className="game-info">
            <History historyItems={history} applyHistory={populateHistory} />
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>);

}

  // ========================================