import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./config/db";
connectDb();
const app = express();
import authRoutes from "./routes/auth"
app.use(express.json());

app.use("/api/v1",authRoutes);
app.post("api/v1/content",(req,res)=>{

})
app.get("/api/v1/content",(req,res)=>{
    res.json({
        message:"Welcome from the get routes!"
    })
})
const port = 3000;
app.listen(port,()=>{
    console.log("Server started")
})
