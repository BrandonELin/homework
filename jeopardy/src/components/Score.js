import {useState} from 'react'


export default function Score ({question}) {
    const [score , setScore] = useState(0)

    function scoreUp() {
        setScore(score + question.value)
    }

    function scoreDown() {
        if (score - question.value <= 0){
          setScore(0)  
        } else {
            setScore(score - question.value)
            console.log(question.value)
        }
    }

    function scoreReset() {
        setScore(0)
    }

    return(
        <>
        <h2><span>Current Score:</span> {score} </h2>
        <div id='buttons'>
            <button id='upButton' onClick={scoreUp}>Add Points</button>
            <button id='downButton' onClick={scoreDown}>Deduct Points</button>
            <button id='resetButton' onClick={scoreReset}> Reset </button>
        </div>
        </>
    )
}