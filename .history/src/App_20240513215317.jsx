
import { useState } from 'react';
import './App.css'
import Dice from './Dice'
import 1 from './'

function App() {
const [val,setVal] = useState(6);
 function rollDice() {
   const val = Math.floor((Math.random() * 6) + 1);
   setVal(val);
 }

  
  return (  
    <div>
    <img src="1.png" alt="Description of the image"></img>
      <h1>Current Dice Value: {val}</h1>
      <Dice diceVal={val} />
      <button onClick={rollDice} className="roll-btn" >Roll</button>
    </div>
  )
}

export default App
