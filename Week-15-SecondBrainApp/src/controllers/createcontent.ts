import Content  from "../models/Content";
import { Response} from "express";
import {authRequest} from "../types/auth.types";
import {Icontent} from "../types/auth.types";
export const createContent = async(req:authRequest,res:Response):Promise<void>=>{
    try{
        const userId = req.userId as string;
        console.log(userId);
        const type = req.body.type;
        const link = req.body.link;
        const title = req.body.title;
        const contentBody = await Content.create({
            owner:userId,
            type:type,
            link:link,
            title:title
        }) as Icontent;
        res.status(200).json({
            message:"Successfully created",
            payload:contentBody
        })
    }catch(err){
        if(err instanceof Error){
            res.status(400).json({
                message:"There is some error in the creation of the content",
                message1:err.message
            })
        }else{
            throw new Error("Just cannot create content");
        }
    }

}