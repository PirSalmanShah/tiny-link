import mongoose,{Schema,model} from "mongoose";

const ClickSchema = new Schema({
    code:{type:String,required:true},
    latitude:{type:Number},
    longitude:{type:Number},
    country:{type:String}
})

export default mongoose.models.Click || model("Click",ClickSchema)