"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ThemeButton from './ThemeButton'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
const Navbar = () => {
  const { data: session } = useSession()
  

  return (
    <div>
      <nav className='flex  backdrop-blur-2xl bg-black/5 dark:bg-white/5 justify-around items-center w-[80%] mx-auto rounded-full mt-3 shadow-2xl shadow-black/50 dark:shadow-white/50 text-black dark:text-white'>
        <Image
          src="/tiny-link.png"
          alt="Logo"
          width={200}
          height={200}
          className='dark:invert-100'
        />
        <ul className='flex gap-3 items-center'>
          <li>Home</li>
          <li>Home</li>
          <li>{!session && <Button onClick={() => { signIn("google") }} >Login</Button>}

            {session && <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback>{`${session?.user?.name}`}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{`${session?.user?.name}`}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={"/list"}> <DropdownMenuItem>My Links</DropdownMenuItem></Link>
                <Link href={"/dashboard"}> <DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                <DropdownMenuItem onClick={()=>{signOut()}}>LogOut</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>}
          </li>


        </ul>
        <ThemeButton />
      </nav>
    </div>
  )
}

export default Navbar
