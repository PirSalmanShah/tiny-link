"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
const ThemeButton = () => {
  
    const {setTheme,theme} = useTheme()

const [mounted, setMounted] = useState(false)
    
    // Only render after hydration
    useEffect(() => {
        setMounted(true)
    }, [])
    
    // Return nothing on server/before hydration
    if (!mounted) {
        return <button className="w-5 h-5"></button> // Same size placeholder
    }


     const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
  return (
    <>
    <button  onClick={()=>{toggleTheme()}}>{theme==="light"? <Image src='./dark.svg' alt='dark-mood'height={20} width={20}/>:<Image src='/light.svg' alt='light-mood'height={20} width={20}/>}</button>
    
    </>
  )
}

export default ThemeButton
