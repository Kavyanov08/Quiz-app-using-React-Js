import React, { useEffect, useState } from 'react'
import quizdata from './questions.json'

export const QuizApp = () => {
    const[currentQuestion,setCurrentQuestion]=useState(0)
    const[score,setScore]=useState(0)
    const[showScore,setShowscore]=useState(false)
    const[timer,setTimer]=useState(10)

    useEffect(()=>{
        let interval
        if(timer> 0 && !showScore){
            interval=setInterval(() => {
                setTimer((pretimer)=>pretimer-1)
            },1000);
        }else{
            clearInterval(interval)
            setShowscore(true)
        }
        return ()=>clearInterval(interval)
    },[timer,showScore])

    const answerClick=(selectedAns)=>{
        if(selectedAns===quizdata[currentQuestion].correctoption){
            setScore((prescore)=>(prescore+1))
        }
        if(currentQuestion<quizdata.length-1){
            setCurrentQuestion((prequestion)=>prequestion+1)
            setTimer(10)
        }
        else{
            setShowscore(true)
        }
    }

    const restartquiz=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowscore(false)
        setTimer(10)
    }
  return (
    <>
    <div className="quizz-app">
        {showScore ? (<div className="score-section"> 
            <h2>Your Score: {score}/{quizdata.length}</h2>
            <button onClick={restartquiz}>Restart</button>
        </div>):(
        <div className="question-section">
            <h2>Question {currentQuestion+1}</h2>
            <p>{quizdata[currentQuestion].question}</p>
            <div className="options">
                {quizdata[currentQuestion].options.map((option,index)=>(
                    <button key={index} onClick={()=>answerClick(option)}>{option}</button>
                ))}
            </div>
            <div className="timer">Time Left:<span> {timer}s</span></div>
        </div>)}
        </div>
    </>
  )
}
