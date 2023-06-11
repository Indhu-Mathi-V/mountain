import React ,{useContext} from 'react';
import { QuizContext } from '../helpers/context';
import "../App.css";

export default function MainMenu() {
    const {gameState,setGameState}=useContext(QuizContext);
  return (
    <div className='Menu'>
        <button
        onClick={()=>{setGameState("quiz");}}>Start Quiz</button>
    </div>
  )
}
