import '../App.css';

/**
 * Maps a matrix to be used as jsx
 * @param {string} containerClassNames A string containg css class names for the outmost container
 * @param {array} buttonInfoMatrix [[text for button, handler for button, ...args for handler], ...[]] 
 * @returns {JSX} A <div> containing buttonInfoMatrix.length buttons
 */
export default function OptionButton ({containerClassNames, buttonInfoMatrix}) {
    return (
        <div className={containerClassNames}>
            {buttonInfoMatrix.map(ele => <button onClick={() => ele[1](ele.slice(2))}>{ele[0]}</button>)}
        </div>
    )
}