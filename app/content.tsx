"use client";
import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export default function Content() {
    return (
        <>
            <header className='muheader bg-primary text-white text-center p-4 mb-3'>
                <h1 className='custom-font'>Exercise &#35;2&#58; Plugin integration with React and npm</h1>
            </header>

            <main className='flex-grow-1'>

                <div className="container">
                    <h2>Practice 2</h2>
                    <div className="row">
                        <div className="col-6">
                            [MAP HERE]
                        </div>
                        <div className="col-6">
                            <ResponsiveContainer width="100%"  minHeight={400}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="col-12">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                        </div>
                    </div>
                </div>




            </main>

            <footer className='footerstyle bg-primary text-white text-center p-4 sticky-bottom'>
                <span id="datetime" className='text-warning'><small>September 12, 2024</small></span>
                <span><small>&copy; 2024 Haeytham Almalak. All rights reserved.</small></span>
            </footer>
        </>
    );
}
