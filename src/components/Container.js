import '../App.css';
import OptionButton from './OptionButton';
import Board from './Board';

export default function Container () {
    const topButtons = [
        ['test1', () => console.log('clicked 1')],
        ['test2', () => console.log('clicked 2')]
    ]

    return (
        <div className="container">
            <OptionButton containerClassNames={'option-container option-container-bottom'} buttonInfoMatrix={topButtons}/>
            <Board />
            <OptionButton containerClassNames={'option-container option-container-top'} buttonInfoMatrix={topButtons}/>
        </div>
    )
}