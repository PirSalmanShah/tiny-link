"use client"
import Image from "next/image";
import { useRef,useState } from "react";
export default function Home() {
  const refLink = useRef("")
  const [shortenUrl, setShortenUrl] = useState('')
  const [originalUrl, setOriginalUrl] = useState('')
  const handleSubmit = async () => {
    const inputData = refLink.current.value;
    refLink.current.value = ''
    const response = await fetch("http://localhost:3000/api/generate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ url: inputData }),

    });
    const data = await response.json()
    setShortenUrl(data.shortenUrl)
    setOriginalUrl(data.originalUrl)
  }
  return (
    <>
      <div className="text-center mt-16 w-[80%] mx-auto">
        <h1 className="font-black text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark: dark:from-white/50 dark:to-white/15 inline-block">Shorten your looong Urls</h1>
        <p className="mt-2 text-xl font-medium text-black/50 dark:text-white/50 wrap-normal w-[80%] mx-auto">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
      </div>

      <div className="mt-8 w-[80%] mx-auto relative">
        <div className="flex justify-center items-center">
          <input ref={refLink} type="text" placeholder="Enter your link" name="link" id="link" className="text-black/50  dark:text-white/50 bg-transparent appearance-none rounded-full border-1 border-netural w-full p-2 pr-35 outline-none transition-all duration-300 focus:shadow-2xl focus:border-black/50 dark:focus:border-white/50 dark:focus:shadow-white/50 focus:shadow-black/50" />


          <button onClick={() => { handleSubmit() }} className="absolute right-0 z-10 text-black/50 dark:text-white/50 bg-transparent appearance-none rounded-full border-1 border-netural w-fit p-2 outline-none transition-all duration-300 hover:shadow-2xl hover:border-black/50 dark:hover:border-white/50 dark:hover:shadow-white/50 hover:shadow-black/50">Get shorten Link</button>
        </div>

      </div>

      <div className="mt-8 w-[80%] mx-auto ">
        {(shortenUrl)&& <table className="table-fixed w-full text-black/50 dark:text-white/50">
          <thead>
            <tr>

              <th className="text-left">Shorten link</th>
              <th className="text-left">Original link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{shortenUrl}</td>
              <td className="overflow-x-scroll whitespace-nowrap no-scrollbar">{originalUrl}</td>
            </tr>
          </tbody>

        </table>}
      </div>

    </>
  );
}
