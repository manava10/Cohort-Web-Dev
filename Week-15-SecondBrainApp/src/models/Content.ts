import mongoose,{Schema} from 'mongoose';
import {Icontent} from "../types/auth.types";

const ContentSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    type:{
        type:String,
        enum:["document","tweet","youtube","link"],
        required:true
    },
    link:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        default:["general"]
    }

},{
    timestamps:true
})
const Content = mongoose.model<Icontent>("Content",ContentSchema);
export default Content;