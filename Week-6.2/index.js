const express = require("express")
const app = express();

app.use(express.json());

const jwt = require("jsonwebtoken")
const JWT_SECRET = 'your_secret_key_here';

const users = [];

app.post("/signin",(req,res)=>{
    const {username} = req.body;
    const {password} = req.body;

    let user = users.find(u => u.username ===username && u.password === password);
    if(user){
        const token = jwt.sign({
            username : username
        },JWT_SECRET);
        res.json({
            token : token
        })
        console.log(users);
        return;
    }
    res.json({
        msg: "Invalid Username and  Password"
    })
    
})

app.post("/signup",(req,res)=>{
    const {username} = req.body;
    const {password} = req.body;

    users.push({
        username : username,
        password: password
    })
    res.json({
        msg : "Sign up SuccessFull"
    })
    console.log(users);

})
app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_SECRET);
    const username = decodedInfo.username;

    let user = users.find(u => u.username===username)

    if(user){
        res.json({
            username : user.username
            ,password : user.password
        })
    }else{
        res.json({
            msg : "Invalid tokens"
        })
    }

})

const PORT = 124;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})
