import mongoose,{Schema,model} from "mongoose";

const UserSchema = new Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userImage:{type:String},
    TotalClick:{type:Number,default:0}
})

export default mongoose.models.User || model("User",UserSchema);