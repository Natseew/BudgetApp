const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const fs = require('fs')
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send("welcome to nodeJS")
})

app.post('/user/login',(req,res)=>{
  var request = req.body
  var data = fs.readFileSync('server/data.json','utf8')
  const db = JSON.parse(data)
  const users = db.users
  var success = false
  for(var i = 0; i < users.length; i++){
    if(users[i].username == request.username && users[i].password == request.password){
      success = true
    }
  }
  if(success == false){
    res.sendStatus(404)
  }
  else{
    res.sendStatus(200)
  }
})  

app.post('/user/signup',(req,res)=>{
  try{
    fs.readFile('server/data.json', 'utf8', function(err, data) {
      if (err) throw err
      var arrayOfObjects = JSON.parse(data)
      arrayOfObjects.users.push(req.body)
      fs.writeFile('server/data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err
        res.sendStatus(200)
      })
    })
  }catch(err){
    res.status(404).send(err)
  }
  
  
})

app.listen(3000,()=> {
  console.log("'CORS-enabled web server listening on port 3000")
})