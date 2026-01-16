import{Request,Response} from 'express';
export const testRoute = (req:Request,res:Response) =>{
    res.status(200).json({
        message:"All OK DUDE NOTHING TO Worry"
    })
}