"use client"
import React, { useState, useEffect } from 'react'
import { toast } from "sonner"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const Page = () => {
    const { data: session, status } = useSession()
    
    //     "loading" → still checking

    // "authenticated" → valid

    // "unauthenticated" → not logged in
    const router = useRouter()
    const [listdata, setlistdata] = useState([])
    useEffect(() => {
        if (status == "unauthenticated") {
            router.push("/")

        }
    }, [status,router])

    const getList = async () => {

            let response = await fetch("https://tiny-link-theta.vercel.app/api/generate/")
            let data = await response.json()
            console.log(data)
            setlistdata(data)
        }

    useEffect(() => {
        if (status == "unauthenticated"){

            getList()
        }
        
    }, [])

   

    const copyToClip = async (e) => {
        await navigator.clipboard.writeText(e)
        toast("Link Copied")
    }
    const deleteRecord = async (e) => {
        const code = e.code
        let res = await fetch(`https://tiny-link-theta.vercel.app/api/delete/${code}`)
        let message = await res.json()
        toast("Link Deleted")
        getList()



    }



    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-12 w-[80%] mx-auto ">
                <table className=" table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">
                                Shorten Link
                            </th>
                            <th className="px-6 py-3">
                                Original link
                            </th>
                            <th className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listdata.map((item, index) => {
                            return <tr key={index} className="odd:bg-white odd:dark:bg-black/10 even:bg-gray-50 even:dark:bg-black border-b dark:border-white border-gray-200">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-between">
                                    {item.shortUrl}
                                    <Image
                                        src="/copy.svg"
                                        alt="copy"
                                        width={20}
                                        height={20}
                                        className='dark:invert-100'
                                        onClick={() => { copyToClip(item.shortUrl) }}
                                    />
                                </td>
                                <td className="px-6 py-4 overflow-x-scroll whitespace-nowrap no-scrollbar">
                                    {item.originalUrl}
                                </td>
                                <td className="px-6 py-4">


                                    <Image
                                        src="/delete.svg"
                                        alt="delete"
                                        width={20}
                                        height={20}
                                        className='dark:invert-100 cursor-pointer'
                                        onClick={() => { deleteRecord(item) }}
                                    />

                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Page
