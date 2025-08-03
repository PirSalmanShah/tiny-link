'use client'
import React, { useState, useEffect } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';



const PieCharts = () => {
  const [pie, setPie] = useState([])
  const getData = async () => {
    let res = await fetch("https://tiny-link-theta.vercel.app/api/dashboard/piechart/")
    let pieData = await res.json()
    // console.log(pieData)
    setPie(pieData.pie)


  }

  useEffect(() => {
    getData()
  }, [])
  const formattedData = pie.map(item => ({
    name: item._id,     // Country name
    value: item.clicks, // Used for tooltip and size
  }));
  return (

    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={formattedData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({ name, value }) => `${name} (${value})`}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

  )
}

export default PieCharts
