const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express();

app.get('/',(req,res)=>{
  res.send("welcome to nodeJS")
})

app.get('/data',(req,res)=>{
  var data = fs.readFileSync('server/data.json','utf8')
  res.send(data)
})  

app.post('/data',(req,res)=>{
  var data = fs.readFileSync('server/data.json','utf8')
  res.send("Testing")
})

app.listen(3000,()=> {
  console.log("Server Is Running")
})