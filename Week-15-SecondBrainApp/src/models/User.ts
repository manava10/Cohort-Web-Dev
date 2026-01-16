import mongoose,{Schema,Document,model,Model} from "mongoose";

interface IUser extends Document{
    username : string;
    password:string;
}
const UserSchema = new Schema<IUser>({
    username : {
        type : String,
        required:true
    },
    password: String
},{
    timestamps: true
})

const User:Model<IUser> = model<IUser>("User",UserSchema);
export default User;
