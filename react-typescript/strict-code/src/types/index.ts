export type Player = number;

export type Board = {
    squares : string[],
    currentPlayer : Player 
} 


export type BoardProps = {
    squares : string[],
    currentPlayer : Player ,
    updateSquares : Function
}

export type SquareProps = {
    cell : string ,
    onClick : Function 
}

export type HistoryProps = {
    historyItems: Board[] , 
    applyHistory : Function 
}