const express = require('express')
const bodyParser = require('body-Parser')
const app = express()
 app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/login',(req,res)=>{
    const username = req.body.username
    if(username.search("19IT") ){
    res.send("hello "+username)
    }
    else{
        res.send("wrong username")
    }
})
app.listen(PORT)
