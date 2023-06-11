import React,{useState} from 'react';
import {Questions} from "../helpers/questionsbank";

export default function Quiz1() {
  const [currQuestion,setCurrQuestion]=useState(0);
  const [selectedOption,setSelectedOption]=useState("");
  const [showResult, setShowResult] = useState(false);
  const [score,setScore]=useState(0);
  const [showPreview, setShowPreview] = useState(false);
  
  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === Questions[currQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    //setShowPreview(false);

    if (currQuestion === Questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrQuestion(currQuestion + 1);
    }
  };
  
  const handlePreviewQuestion = () => {
    if(currQuestion<Questions.length){
     setCurrQuestion(currQuestion-1);
     setSelectedOption("");
     setShowPreview(true);
     setShowResult(false);
    }

  };
  return (
    <div className='Quiz1'>
      <h1>{Questions[currQuestion].questions}</h1>
      <div className='options'>
      <div>
      <form>
            {Questions[currQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
      </div>
        <div>
          <button onClick={handleNextQuestion}>Next</button>
          <button onClick={handlePreviewQuestion}>Preview</button>
        </div>
      </div>
    </div>
  )
}
