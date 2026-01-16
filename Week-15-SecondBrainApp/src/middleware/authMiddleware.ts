import {NextFunction,Request,Response} from "express";
import jwt from 'jsonwebtoken';
import {payloadBody} from "../types/auth.types";
import {authRequest}  from "../types/auth.types";
export const userMiddleware = (req:authRequest,res:Response,next:NextFunction)=>{
    const header = req.headers["authorization"];

    if(!header){
        res.status(401).json({
            message:"Authorization header is missing"
        })
        return ;
    }
    const token = header?.split(" ")[1];
    console.log(token);
    if(!token){
        res.status(401).json({
            message:"Token Header is missing"
        })
        return;
    }
    try{
        console.log("We are reaching haere");
        const decodePayload :payloadBody = jwt.verify(token,process.env.JWT_SECRET as string) as payloadBody;
        console.log(decodePayload);
        req.userId = decodePayload.id;
        next();
    }catch(err){
        if(err instanceof Error){
            res.status(400).json({
                message:"There is something wrong from user middleware or you are giving the invalid Token",
                message1:err.message
            })
            return;
        }else{
            throw new Error("Error occured in the , Middleware Or Token wrong");
        }
    }

}