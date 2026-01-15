import mongoose,{Document,Schema} from 'mongoose';
interface Icontent extends Document{
    type : "document" | "tweet" | "youtube" |"link";
    link : string;
    "title" : string;
    "tags" : string[]
}

const ContentSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
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