import mongoose from "mongoose";
import Url from "@/app/models/Url";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import Click from "@/app/models/Click";


try {
    await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
    throw new Error("Database connection failed");
}

export async function GET() {


    let userId = ''
    const session = await getServerSession(authOptions)
    if (session?.user?.email) {
        const user = await User.findOne({ userEmail: session.user.email })
        if (user) {
            userId = user._id;
        }
    }

    
    // Get user's shortUrls
    const urls = await Url.find({ user: userId }, 'code');
    const code = urls.map(i=>i.code)
    const country = await Click.aggregate([{$match:{ code: { $in: code } }},{$group:{_id:"$country",clicks:{$sum:1}}}])
        // console.log(country)
    //   console.log(count)
        
    return Response.json({pie:country})
}