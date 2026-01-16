import {Request} from "express";
import {Document} from "mongoose";
import mongoose from "mongoose";

export interface authenticationBody{
    username:string,
    password:string
}
export interface payloadBody{
    id:string,
    username:string
}
export interface authRequest extends Request{
    userId?: string;
}
export interface Icontent extends Document{
    owner: mongoose.Types.ObjectId;
    type : "document" | "tweet" | "youtube" |"link";
    link : string;
    "title" : string;
    "tags" ?: string[]
}