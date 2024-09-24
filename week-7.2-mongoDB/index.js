const express = require("express")
const {UserModel,TodoModel} = require("./db")
const bcrypt = require("bcrypt")
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECRET = 'ilovekiara';
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mmanav10:3GBRChpK5zDLLBTL@cluster0.nordt.mongodb.net/todo-collection1");



app.use(express.json())


app.post("/signup",async (req,res)=>{
    const {email} = req.body;
    const {password} = req.body;
    const {name} =req.body;

    //For Hashing Password
    
    const HashedPassword = await bcrypt.hash(password,10);
    console.log(HashedPassword);
    //We know that on email duplication during current account, out Server is Crashing.
    //Means it is throwing an error, So we will wrap the potential code that can throw an error.
    await UserModel.create({
        email:email,
        password:HashedPassword,
        name:name
    });
    //the create function is an async one, So it is good idea make them await
    res.json({
        msg:"You are Signed Up"
    })
})
app.post("/signin",async (req,res)=>{
    const {email} = req.body;
    const {password} = req.body;

    const user = await UserModel.findOne({
        email:email
    });
    if(!user){
        res.status(403).json({
            message : "User doesn't exist"
        })
        return

    }

    const passwordMatch = await bcrypt.compare(password,user.password);

    console.log(user);

    if(passwordMatch){
        const token = jwt.sign({
            id:user._id
        },JWT_SECRET);
        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            msg : "Wrong Credintials"
        });
    }
})
app.post("/todo",auth,async (req,res)=>{
    const userId = req.userId;
    const {title} = req.body;
    const {done} = req.body;
    await TodoModel.create({
        title: title,
        userId :userId,
        done : done
    })

    res.json({
        msg : "ToDo added"
    })


})


app.get("/todos",auth,async (req,res)=>{
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    })
    
})


//Middleware For Authentication
function auth(req,res,next){
    const {token} = req.headers;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            msg : "Wrong Credintials"
        })
    }

}


const PORT = 8080;
app.listen(PORT,()=>{
   console.log(`app is live at PORT ${PORT}`);
})

//Thank You


