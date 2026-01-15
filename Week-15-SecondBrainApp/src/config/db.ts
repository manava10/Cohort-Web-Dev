import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async (): Promise<void> =>{
    try{
        const mongoUri :string|undefined = process.env.MONGO_URI ;
        if(!mongoUri){
            throw Error("MongoDb is missing!");
        }
        await mongoose.connect(mongoUri)
        console.log("Connection to MongoDB is Successfull");
    }catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }else{
            console.error("Mongo Connection Failed");
        }
    }
}

export default connectDb;