import '../App.css';
import Square from './Square';
import boardMatrixTemplate from './helper-functions/boardMatrixTemplate';
import checkForWinner from './helper-functions/checkForWinner';
import { useState, useRef } from 'react';

export default function Board () {
    const [shape, setShape] = useState('X');
    const [hasWon, setHasWon] = useState(false);

    const board = useRef(boardMatrixTemplate());

    const updateBoard = ([i, j]) => {
            board.current[i][j] = shape;

            if (checkForWinner(board.current, shape)) {
                console.log('winner')
                setHasWon(true);
            }
    }


    console.log('render');
    return (
        <div className="board-container">
            <h1 className='tic-tac-toe-header'>Title</h1>
            <div className="board">
                {Array.from({ length: 9 }, (_, i) => {
                    const row = Math.floor(i / 3);
                    const col = i % 3;
                    return <Square key={i} shape={shape} position={[row, col]} updateBoard={updateBoard} hasWon={hasWon} updateShape={setShape} />;
                })}
            </div>
        </div>
    )
}