const express = require ("express")
const app = express();
const user =[{
    name:"Manav",
    kidneys:[{
        healthy:true
    }]
}]

app.use(express.json());

//QueryParameter

app.get("/",function(req,res){
    //Write Logic
    const JohnSKidney = user[0].kidneys;
    const numberOfKidney = JohnSKidney.length;
    //filter in JavaScript.
    let numberOfHealthyKidney = 0;
    for(let i=0;i<JohnSKidney.length;i++ ){
        if(JohnSKidney[i].healthy){
            numberOfHealthyKidney += 1;
        }
    }
    const numberOfUnhealthyKindney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKindney
    })
});
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy; //or, const {isHealthy} = req.body
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"!Done"
    })
    //We can also say this as making change in memory
    //Common, Way to post request is postman
})
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({});

})
app.delete("/",function(req,res){
    let newKidneys = [];
    for(let i=0; i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }

    user[0].kidneys = newKidneys;

    res.send({
        msg:"Done"
    })


})
app.listen(3000);

