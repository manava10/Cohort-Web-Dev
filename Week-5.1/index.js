// Getting input by Route Parameter

const express = require("express")
const app = express()

const sum = (a,b) => a+b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const subtract = (a,b) => a-b;

app.get("/multiply/:param1/:param2",function(req,res){
    const {param1, param2} = req.params;

    const value = multiply(Number(param1),Number(param2))

    res.send(`The product of given both number is ${value.toString()}`)
    

})
app.get("/sum/:param1/:param2",function(req,res){

    const {param1,param2} = req.params;

    const value = sum(Number(param1),Number(param2))

    res.send(`The sum of given both number is ${value.toString()}`)
    
})
app.get("/divide/:param1/:param2",function(req,res){
    const {param1,param2} = req.params;

    const value = divide(Number(param1), Number(param2))

    res.send(`The divide of given both number is ${value.toString()}`)
    
})
app.get("/subtract/:param1/:param2",function(req,res){

    const {param1,param2} = req.params;

    const value = subtract(Number(param1),Number(param2))

    res.send(`The sub  of given both number is ${value.toString()}`)
    
})

const PORT = 2390;

app.listen(PORT,()=>{
    console.log("Port is Running at Port No. 2390 ")
})

//Taking INPUT BY ROUTE PARAMETRE.
