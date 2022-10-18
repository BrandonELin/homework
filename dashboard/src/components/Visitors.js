
import graph from './1-Line-Chart.png'

let number=400

function Visitors () {
    number++
    return(
        <div id='visitors'>
            <div>
                <h1>Website Visitors</h1>
                <p> {number} </p>
            </div>
            <img src={graph} alt='graph' />
        </div>
    )
}
export default Visitors