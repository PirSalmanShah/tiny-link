import mongoose,{Schema,model} from "mongoose";

const UrlSchema = new Schema({
    shortUrl:{type:String,required:true,index:true},
    code:{type:String,required:true,index:true},
    originalUrl:{type:String,required:true,index:true},
    click:{type:Number,default:0},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt:{ type: Date, default: Date.now },
    updatedAT:{ type: Date, default: Date.now }
})

export default mongoose.models.Url || model("Url",UrlSchema);