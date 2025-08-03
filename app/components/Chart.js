// ChartComponent.js
'use client';
import React,{useState,useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const MyLineChart = () => {
const [bar, setBar] = useState([])
    const getData= async()=>{
        let resbar = await fetch("http://localhost:3000/api/dashboard/chart/")
    let bardata = await resbar.json()
    setBar(bardata.bar)
    }

    useEffect(() => {
      getData()
    }, [])
    // console.log(bar)
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="code" />
                <YAxis />
                <Tooltip />
                <Bar barSize={30} dataKey='click' stroke="#8884d8" />
               
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;