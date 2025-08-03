import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import mongoose from 'mongoose'
import User from '@/app/models/User';


try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}


export const authOptions={
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  // CallBack Middleware
  callbacks: {
    // Add user to DB on signIn
  async signIn({ user, account}) {
    
    if (account.provider=="google") {
        const email = user?.email
        const name = user?.name
        const image = user?.image
        console
        const currentUser = await User.findOne({userEmail:email})
        if(!currentUser){
          const user = await User.create({userName:name,userEmail:email,userImage:image})
          await user.save()
        }       
      return true
    }
     
  },
  // Pass user data to session
  async session({ session, token, user }) {
    const userData = await User.findOne({userEmail:session?.user?.email})
    session.user.name = userData.userName;
    session.user.email = userData.userEmail;
    session.user.image = userData.userImage;
    
    return session
  }
}

}

const handler = NextAuth(authOptions)

export {handler as GET,handler as POST}