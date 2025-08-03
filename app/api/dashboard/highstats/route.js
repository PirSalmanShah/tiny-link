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

    const data = await Url.aggregate([{ $match: { user: userId } }, { $group: { _id: null, totalurls: { $sum: 1 }, totalclicks: { $sum: "$click" } } }])
    const topUrl = await Url.find({ user: userId }).sort({ click: -1 }).limit(1)
    // Get user's shortUrls
    const urls = await Url.find({ user: userId }, 'code');
    const code = urls.map(u => u.code);

    // Get distinct countries only for those shortUrls
    const totalCountry = await Click.distinct('country', { code: { $in: code } });
    //  let count =0;
    //  data.map((item,index)=>{count=count+item.click})
    // console.log(data[0].totalclicks)
    // console.log(data[0].totalurls)
    // console.log(topUrl[0].shortUrl)
    // console.log(totalCountry.length)
    //   console.log(count)
        
    return Response.json({tc:data[0].totalclicks,tu:data[0].totalurls,topu:topUrl[0].shortUrl,tcon:totalCountry.length})
}