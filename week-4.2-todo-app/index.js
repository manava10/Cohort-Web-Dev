const express = require("express")
const app = express()

//Middleware to parse JSON.

app.use(express.json());

let todos = [];

app.get("/",function(req,res){
    res.json(todos)
})
app.post("/",function(req,res){
    const {title} = req.body;
    todos.push({
        id:todos.length+1,
        title:title
    })
    res.json({msg:"todo Added", title})
})
app.put("/",function(req,res){
    const {id, title} = req.body;

    if (!id || !title) {
        return res.status(400).json({ error: "ID and title are required" });
    }

    const todo = todos.find((todo) => todo.id === id);
    todo.title = title;

    res.json({message : "TodoUpdated", todo})
    
})
app.delete("/",function(req,res){
    const {id} = req.body;

    todos = todos.filter(todo => todo.id !== id)
    res.json({
        msg:"Deleted"
    })
})
app.listen(8165 ,()=>{
    console.log("Server running on port 8165")
})