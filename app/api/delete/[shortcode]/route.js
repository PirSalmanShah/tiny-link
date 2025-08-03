import mongoose from "mongoose";
import Url from "@/app/models/Url";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";


try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}

export async function GET(request, {params}){

    const {shortcode} = await params
    let userId = ''
    const session = await getServerSession(authOptions)
    if(session?.user?.email){
        const user = await User.findOne({userEmail:session.user.email})
        if(user){
          userId = user._id;
        }
      }
    await Url.findOneAndDelete({user:userId,code:shortcode})
    

    return Response.json({ message: "done" })
}