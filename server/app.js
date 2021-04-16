const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const fs = require('fs')
const app = express();

app.use(cors())

app.get('/',(req,res)=>{
  res.send("welcome to nodeJS")
})

app.get('/user/login',(req,res)=>{
  var data = fs.readFileSync('server/data.json','utf8')
  res.send(data)
})  

app.post('/user/signup',(req,res)=>{
  console.dir(req.body)
  var data = fs.readFileSync('server/data.json','utf8')
  res.send("Testing")
})

app.listen(3000,()=> {
  console.log("'CORS-enabled web server listening on port 3000")
})