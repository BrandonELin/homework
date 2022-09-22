const express = require('express');

const app = express();

const port = 3000

app.listen(port, ()=>{
    console.log('Listening to port ', port)
})

app.get('/', function(req, res){
    res.send(`99 little bugs in the code<br>99 little bugs<br>take one down,<br>pass it around<br><a href='http://localhost:3000/98'>98 little bugs in the code </a>`)
})

app.get('/:bottles', function(req, res){
    let bottles=req.params.bottles-1
    if(Math.random()>.95){
        bottles+=(Math.floor(Math.random()*30))
    }
    if(req.params.bottles>0){
        res.send(`${req.params.bottles} little bugs in the code<br>${req.params.bottles} little bugs<br>take one down,<br>pass it around<br><a href='http://localhost:3000/${bottles}'>${bottles} little bugs in the code </a>`)
    } else {
        res.send(`${req.params.bottles} little bugs in the code<br><a href='http://localhost:3000/'>Start Over?</a>`)
    }
})