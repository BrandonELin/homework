
import './App.css';
import {useState, useEffect} from 'react';
import Question from './components/Question';
import Score from './components/Score';

function App() {

  let [question, setQuestion] = useState('')
  let [answer , setAnswer] = useState('')
  

  const handleQuestion = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()

    setQuestion(data[0])
    setAnswer('')
  }

  useEffect(() => {
    fetch('http://jservice.io/api/random')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setQuestion(data[0])
    })
  }, [])
 
  function handleAnswer () {
    setAnswer(question.answer)
  }
  return (
    <div id="JeopardyBoard">
      <h1>Welcome to Jeopardy!</h1>
      <Score question={question}/>
      <h2>Let's play!</h2>
      <button onClick={handleQuestion}>Random Trivia Question</button>
      <Question question={question}/>
      <button onClick={handleAnswer}>Click to Reveal Question</button>
      <h2> {answer} </h2>
    </div>
  );
}

export default App;