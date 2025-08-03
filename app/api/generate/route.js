
import CryptoJS from "crypto-js";
import mongoose from "mongoose";
import Url from "@/app/models/Url";
import User from "@/app/models/User.js";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.js";

try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}



const converter = (url)=>{
 const hash = CryptoJS.SHA256(url).toString()
 const shorthash = hash.slice(0,7)
 return shorthash
}

export async function POST(request) {
  // get session 
  const session = await getServerSession(authOptions)
  // get long url from body
  const body = await request.json(); // <-- THIS is how you get the body
  const { url } = body;
// get base url so we don't need to hard code it and can be use any server provider
  const head = await request.headers
  // console.log(head)
  const proto = head.get('x-forwarded-proto')
  const host = head.get('x-forwarded-host')
  const baseurl = `${proto}://${host}/`



  const encoded = converter(url);
  const data = {shortUrl:`${baseurl}${encoded}`,code:encoded,originalUrl:url,}
  if(session?.user?.email){
    const user = await User.findOne({userEmail:session.user.email})
    if(user){
      data.user = user._id;
    }
  }
  await Url.create(data)
 
  return Response.json({ shortenUrl: `${baseurl}${encoded}`,originalUrl:url })
}



export async function GET() {
  const session = await getServerSession(authOptions)
  if(!session){
    return Response.json({ message: "Unauthorized" });
  }
  else{
    const user = await User.findOne({userEmail:session.user.email})
    const data = await Url.find({user:user._id}).sort({ createdAt: -1 })
    return Response.json(data)
  }
}