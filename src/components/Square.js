import '../App.css';
import { useState } from "react";


export default function Square ({ shape, position, updateBoard }) {
    const [text, setText] = useState('');

    const clickHandler = () => {
        if (text !== '') {
            return;
        }
        setText(shape);
        updateBoard(position);
    }

    return (
        <div className="square" onClick={clickHandler}>
            <span className="square-content">{text}</span>
        </div>
    )
}