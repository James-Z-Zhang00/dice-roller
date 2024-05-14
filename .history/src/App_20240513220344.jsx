
import { useState } from 'react';
import './App.css';
import Dice from './Dice';
import dice1 from './1.png';

function App() {
const [val,setVal] = useState(6);
 function rollDice() {
   const val = Math.floor((Math.random() * 6) + 1);
   setVal(val);
 }

  
  return (  
    <div>
      <h1>Current Dice Value: {val}</h1>
      <Dice diceVal={val} />
      <button onClick={rollDice} className="roll-btn" >Roll</button>
    </div>
  )
}

export default App
