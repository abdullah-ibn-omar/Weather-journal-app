const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./dist"))
console.log('hello from server')

const port = 3000
const server = app.listen(port,function(){
    console.log(`server running on port ${port}`)
})


projetData = {} 

app.get('/the-route' , returnData)
function returnData(req,res){
    res.send(projetData)
    console.log(projetData)
}

app.post('/postData' , postData)
function postData(req,res){
    newData = {}
    newData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userReponse: req.body.userReponse,
        city: req.body.city,
        description: req.body.description

    }
    projetData = newData
    
}
console.log("you will learn ")