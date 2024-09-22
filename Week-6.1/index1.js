//We will return user their username and password 
//If they have valid token
//To get user info, We will send the token in header through postman, through get endpoint
//Theses tokens are stateful.

const express = require("express");
const app = express()

app.use(express.json())

let users = [];

const generateToken = () =>{
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;

}


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
        const token = generateToken();
        user.token = token;
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
    let user = users.find(u => u.token === token)

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