import { useState } from 'react';
import './App.css';
import Dice from './Dice';

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
      <button onClick={rollDice} style={{ fontSize: '2rem', fontWeight: 500;}}>
      Roll</button>
    </div>
  )
}

export default App
