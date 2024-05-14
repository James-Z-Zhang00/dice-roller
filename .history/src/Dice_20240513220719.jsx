import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice({diceVal}) {

    return (
        <div>
            <img src={dices[diceVal-1]} alt={`Dice showing ${diceVal}`} />
        </div>
    );
}

export default Dice;