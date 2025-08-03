"use client"
import React, { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import MyLineChart from '../components/Chart'
import PieCharts from '../components/PieCharts';
import { useRouter } from 'next/navigation'


const Page = () => {
  const [code, setcode] = useState([])
  const [currentLink, setCurrentLink] = useState('')
  const [highstats, setHighstats] = useState({})
  const [location, setLocation] = useState([])
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status == "unauthenticated") {
      router.push("/")

    }
  }, [status, router])


  
  const getList = async () => {

    let res = await fetch("https://tiny-link-theta.vercel.app/api/dashboard/geolocation/")
    let geo = await res.json()
    setLocation(geo.geolocation)
    setcode(geo.code)
    setCurrentLink(geo.code[0])
    let response = await fetch("https://tiny-link-theta.vercel.app/api/dashboard/highstats/")
    let data = await response.json()
    setHighstats(data)
    // console.log(geo)

  }

  useEffect(() => {

    getList()

  }, [])

  return (
    <>
      <div className=' mt-20'>
        <div className='w-[90%] mx-auto bg-black/5 dark:bg-neutral-900 p-3 rounded-4xl '>
          <h3 className='text-black/50 dark:text-white font-bold text-3xl'>High Stats</h3>
          <div className=' p-3.5  flex flex-wrap gap-2 justify-center'>

            <Card className='w-[45%]'>
              <CardHeader>
                <CardDescription>Total links Created</CardDescription>
                <CardTitle>{highstats.tu}</CardTitle>

              </CardHeader>

            </Card>
            <Card className='w-[45%]'>
              <CardHeader>
                <CardDescription>Total Clicks</CardDescription>
                <CardTitle>{highstats.tc}</CardTitle>

              </CardHeader>

            </Card>
            <Card className='w-[45%]'>
              <CardHeader>
                <CardDescription>Top Url</CardDescription>
                <CardTitle>{highstats.topu}</CardTitle>

              </CardHeader>

            </Card>
            <Card className='w-[45%]'>
              <CardHeader>
                <CardDescription>Total Countries</CardDescription>
                <CardTitle>{highstats.tcon}</CardTitle>

              </CardHeader>

            </Card>

          </div></div>
        <div className='w-[90%] mx-auto bg-black/5 dark:bg-neutral-900 p-3 rounded-4xl mt-3'>
          <h3 className='text-black/50 dark:text-white font-bold text-3xl'>Clicks Per Url</h3>
          <MyLineChart />
        </div >
        <div className='w-[90%] mx-auto bg-black/5 dark:bg-neutral-900 p-3 rounded-4xl mt-3'>
          <h3 className='text-black/50 dark:text-white font-bold text-3xl'>Geographic Click Map</h3>
          <div className=' py-16 px-6 flex gap-3'>
            <Map
              // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX}
              initialViewState={{
                longitude: 0,
                latitude: 0,
                zoom: 0.5
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/streets-v9">
              {location.map((item, index) => {
                return (item.code == currentLink) && (<Marker key={index} longitude={item.longitude} latitude={item.latitude} anchor="bottom"></Marker>)
              })}
              {/* <Marker longitude={67.0104} latitude={24.8608} anchor="bottom"></Marker>
            <Marker longitude={104.165802} latitude={34.668138} anchor="bottom"></Marker> */}
            </Map>
            <div className=' w-[45%]'>

              <ul className='flex flex-col gap-3.5 overflow-y-scroll no-scrollbar'>
                {code.map((item, index) => {
                  return <li key={index}><Button className={`w-full`} variant="outline" onClick={() => setCurrentLink(item)} >{item}</Button></li>
                })}
              </ul>
            </div>
          </div></div>

        <div className='w-[90%] mx-auto bg-black/5 dark:bg-neutral-900 p-3 rounded-4xl mt-3 h-[400px]'>
          <h3 className='text-black/50 dark:text-white font-bold text-3xl'>Country Distribution</h3>
          <PieCharts />

        </div>
      </div>

    </>
  )
}

export default Page
