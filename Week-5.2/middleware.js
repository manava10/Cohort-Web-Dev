const express = require("express")
const app = express();

app.use(express.json())

let requestCount =0;

function requestIncreaser(req,res,next){
    requestCount = requestCount+1;
    console.log(`Total number of request is ${requestCount}`);
    next();
}

function realSumHandler(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans:a+b
    });
}
app.get("/sum",requestIncreaser,realSumHandler);

const PORT = 2223
;

app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`)
});
///////