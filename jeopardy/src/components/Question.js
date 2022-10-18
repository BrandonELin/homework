export default function Question ({question}) {
    
    function loading () {
        return(
            <>
            <h2>Loading Question...</h2>
            </>
        )
    }
    function loaded() {
        return(
            <>
            <h2> <span>Category:</span> {question.category.title.toString()}</h2>
            <h2> <span>Value:</span> {question.value}</h2>
            <h2 id='answer'> <span>Answer:</span> {question.question} </h2>
            </>
        )  
    }
    
    return question ? loaded() : loading()
}