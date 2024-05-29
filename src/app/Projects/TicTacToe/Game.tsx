'use client'

import { useState } from "react";
import style from './TicTacToe.module.css'

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currMove, setCurrMove] = useState(0);
    const currState = history[currMove];
    const [posClicked, setPosClicked] = useState([Array(2)]);

    const jumpTo = (i:number) => {
        setCurrMove(i);
    }

    const onPlay = (squares:Array<any>, i:number) => {
        const nextHistory = [...history.slice(0,currMove+1), squares];
        setHistory(nextHistory);
        setCurrMove(nextHistory.length-1);
        setPosClicked([...posClicked.slice(0,currMove+1), [Math.floor(i/3), i % 3]]);
    }

    const timeline = history.map((elt, idx) => {
        let info;
        if (idx == 0) info = "Start Over";
        else info = "Go to move #" + idx + " (row " + posClicked[idx][0] + ", col " + posClicked[idx][1]  + ")";
        return (
            <li className={style.lists} key={idx}>
                <button className="border-2"onClick={() => jumpTo(idx)}>{info}</button>
            </li>
        )
    });


    return (
        <>
            <div className={style.game}>
                <div>
                    <Board currMove={currMove} squares = {currState} onPlay={onPlay}/>
                </div>
                <div className={style.gameinfo}>
                    <ol>{timeline}</ol>
                </div>
            </div>
        </>
    )
}


const Board = ({currMove, squares, onPlay} : {currMove:number, squares:Array<any>, onPlay:any}) => {   
    const handleClick = (i:number) => {
        if (squares[i] || determineWinner(squares).length != 0) return;
        const nextSquare = squares.slice();
        nextSquare[i] = currMove % 2 == 0 ? "X" : "O";
        onPlay(nextSquare, i);
    }

    let status;

    const winner = determineWinner(squares);
    if (winner.length > 0) {
        status = squares[winner[0]] + " won the game!";
    }
    else if (currMove == 9) {
        status = "Draw";
    }
    else {
        status = "Next Player is ";
        status += currMove % 2 == 0 ? "X" : "O";
    }

    const MakeBoard = () => {
        const boardRows = [];
        for (let i = 0; i < 3; i++) {
            const rowSquare = [];
            for (let j = 0; j < 3; j++) {
                if (winner.length == 0 || !winner.includes(i*3+j)) rowSquare.push(<Square key={i*3+j} square = {squares[i*3+j]} type = "square" clickSquare = {() => {handleClick(i*3+j)}}/>);
                else rowSquare.push(<Square key={i*3+j} square = {squares[i*3+j]} type = "squareHighlighted" clickSquare = {() => {handleClick(i*3+j)}}/>);
            }
            boardRows.push(
                <div className={style.boardrow}>
                    {rowSquare}
                </div>
            );
        }
        return (boardRows);
    }

    return (
        <>
            <div className={style.status}>
                {status}
            </div>
            <div>
                <MakeBoard/>
            </div>
            <div>
                You are at move {currMove}
            </div>
        </>
    )
} 


const Square = ({square, type, clickSquare} : {square:string, type:string, clickSquare:any}) => {
    let styleType = style.square;
    if (type != "square") styleType = style.squareHighlighted;
    return (
        <button className={styleType} onClick={clickSquare}>
            {square}
        </button>
    )
}

const determineWinner = (squares:Array<any>) => {
    console.log(squares);
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [a, b, c];
          }
    }
    return [];
}