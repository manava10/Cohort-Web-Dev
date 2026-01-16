import {Request, Response} from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import {hashPassword} from "../services/auth.services";
import {authenticationBody,payloadBody}  from "../types/auth.types";
import {generateToken} from "../services/auth.services";


export const signUp = async(req:Request<{},{},authenticationBody>, res:Response):Promise<void> =>{
    const {username, password} = req.body;
    try{
        if(!username || !password){
            res.status(400).json({
                message:"Username and password is required"
            });
            return ;
        }
        if(username.length<=3){
            res.json({
                message : " username should be 3 atleast 4 digit"
            })
            return;
        }
        const  existUser = await User.findOne({username:username});
        if(existUser){
            res.json({
                message:"User already exists with this username"
            })
            return ;
        }
        const hashP:string = await hashPassword(password);
        const userCreated = await User.create({username:username,password:hashP});
        res.json({
            message:"Signup Success",
            data:userCreated        })
    }catch(err){
        if(err instanceof  Error){
            console.log(err.message);
        }else{
            console.log("Error occurred  while signing up")
        }
    }
}
export const signIn = async(req:Request<{},{},authenticationBody>,res:Response):Promise<void> =>{
    const {username , password }= req.body;
    try{
        if(!username || !password){
            res.status(400).json({
                message: "Username and password is required"
            })
            return ;
        }
        const validUser = await User.findOne({username:username});
        if(!validUser){
            res.status(400).json({
                message:"Username or Password is wrong"
            })
        }
        if(validUser){
            const isMatch:boolean = await bcrypt.compare(password,validUser.password);
            if(isMatch){
                const payload:payloadBody = ({
                    id:validUser._id.toString(),
                    username:validUser.username
                })
                const jwtToken = generateToken(payload);
                res.json({
                    message:"Login successfull, JWT TOKEN has been successfully return with this.",
                    jwtToken:jwtToken,
                    payload:payload
                })

            }else{
                res.status(400).json({
                    message:"Username or password is wrong"
                })
                return ;
            }

        }
    }catch(err){
        if(err instanceof Error){
            res.status(500).json({
                message:"SomeError Occurred"
            })
            console.log(err.message);
        }else{
            throw new Error("SomeError Occurred");
        }
    }

}
