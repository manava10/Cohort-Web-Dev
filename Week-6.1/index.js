//Basic sign in and Sign up end point, Where a random token is being return.
//We will write another code where user will also get their data, with the token they have.
const express = require("express")
const app = express()

app.use(express.json());

const users = [];

console.log(users);

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
        username : username,
        password : password
    })

    res.json({
        msg : "Sign UP SuccessFull"
    })
    console.log(users);

})


app.post("/signin",(req,res)=>{

    const {username} = req.body;
    const {password} = req.body;

    const user = users.find(function(u){
        if(u.username === username && u.password === password){
            return true;
        }else{
            return false;
        }
    })

    if(user){

        const token = generateToken();

        user.token = token;
        res.json({

            msg : token
            
        })
    }
    console.log(users);

})



const PORT = 2221;

app.listen(PORT,()=>{
    console.log(`App is live on ${PORT}`)
})