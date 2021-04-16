const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const fs = require('fs')
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send("welcome to nodeJS")
})

app.post('/user/login',(req,res)=>{
  var response = false
  // var request = JSON.parse(req.body)
  console.log(req.body)
  var data = fs.readFileSync('server/data.json','utf8')
  const db = JSON.parse(data)
  const users = db.users
  for(var i = 0; i < users.length; i++){
    console.log(users[i])
  }
  res.send(response)
})  

app.post('/user/signup',(req,res)=>{
  console.dir(req.body)
  var data = fs.readFileSync('server/data.json','utf8')
  res.send("Testing")
})

app.listen(3000,()=> {
  console.log("'CORS-enabled web server listening on port 3000")
})