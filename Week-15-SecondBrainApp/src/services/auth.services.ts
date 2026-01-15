import  bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import {payloadBody}  from "../types/auth.types";

dotenv.config();

export const hashPassword = async (password:string):Promise<string> => {
    return await bcrypt.hash(password, 10);
}

export const generateToken = (payload: payloadBody): string => {
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
    });
};