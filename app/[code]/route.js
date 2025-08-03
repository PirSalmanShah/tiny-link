
import mongoose from "mongoose";
import Url from "../models/Url";
import Click from "../models/Click";
import { NextResponse } from "next/server";

try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}

export async function GET(request,{ params }) {
  const { code } = await params
  const website = await Url.findOneAndUpdate({code:code},{$inc: { click : 1 }},{new:true})
  if(!website){
    return NextResponse.json({message:"Not found"})
  }
  const head = await request.headers
  const ip = head.get("x-forwarded-for")
  

  //Sent Ip address to freeip api to get geolocation 
  let response =await fetch(`https://free.freeipapi.com/api/json/${ip}`)
  let data = await response.json()
  if(data.latitude&&data.longitude&&data.countryName){

    await Click.create({code:code,latitude:data.latitude,longitude:data.longitude,country:data.countryName})
  }
  return NextResponse.redirect(website.originalUrl)
}



