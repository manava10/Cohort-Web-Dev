

const express = require("express");
const app = express()

const jwt = require('jsonwebtoken')
const JWT_SECRET = 'your_secret_key_here';

app.use(express.json())

let users = [];




app.post("/signup",(req,res)=>{
    const {username} = req.body;
    const {password} = req.body;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"SignUP SuccessFull"
    })
    console.log(users);
})
app.post("/signin",(req,res)=>{
    const {username} = req.body;
    const {password} = req.body;

    const user = users.find(u =>{
        if(u.username === username && u.password === password){
            return true ;
        }else{
            return false;
        }
    })
    if(user){
        const token = jwt.sign({
            username: username
        },JWT_SECRET);
        res.json({
            token : token
        })
        console.log(users);
        return;
    }
    res.json({
        msg:"Invalid User ID and Password"
    })
})

app.get("/me",(req,res)=>{
    const {token} = req.headers;
    const decodedInfo = jwt.verify(token,JWT_SECRET);
    const username = decodedInfo.username;
    let user = users.find(u => u.username === username)

    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.json({
            msg: "Token Invalid"
        })
    }
})
const PORT = 22222;

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})