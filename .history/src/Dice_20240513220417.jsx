import dice1 from './1.png';
import dice2 from './2.png';
import dice3 from './3.png';
import dice4 from './4.png';
import dice5 from './5.png';
import dice6 from './6.png';

// Array of images
const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice({diceVal}) {

    return (
        <div>
            <img src={dices[diceVal-1]} alt={`Dice showing ${diceVal}`} />
        </div>
    );
}

export default Dice;