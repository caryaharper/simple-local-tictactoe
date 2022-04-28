import '../App.css';
import Square from './Square';
import boardMatrixTemplate from './helper-functions/boardMatrixTemplate';
import checkForWinner from './helper-functions/checkForWinner';
import { useState } from 'react';

export default function Board () {
    const [shape, setShape] = useState('X');
    const [board, setBoard] = useState(boardMatrixTemplate());
    const [hasWon, setHasWon] = useState(false);

    const updateBoard = ([i, j]) => {
        setBoard(board => {
            board[i][j] = shape;

            if (checkForWinner(board, shape)) {
                console.log('winner')
                setHasWon(true);
            }

            return board;
        })
    }


    console.log('render');
    return (
        <div className="board-container">
            <div className="board">
                <Square shape={shape} position={[0, 0]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[0, 1]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[0, 2]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[1, 0]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[1, 1]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[1, 2]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[2, 0]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[2, 1]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
                <Square shape={shape} position={[2, 2]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape}/>
            </div>
        </div>
    )
}