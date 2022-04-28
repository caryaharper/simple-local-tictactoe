import '../App.css';
import { useState } from "react";


export default function Square ({ shape, position, updateBoard, hasWon, updateShape }) {
    const [text, setText] = useState('');

    const clickHandler = () => {
        if (text !== '' || hasWon) {
            console.log('square state change prevented')
            return;
        }
        setText(shape);
        updateShape(shape === 'X' ? 'O' : 'X')
        updateBoard(position);
    }

    return (
        <div className="square" onClick={clickHandler}>
            <span className="square-content">{text}</span>
        </div>
    )
}