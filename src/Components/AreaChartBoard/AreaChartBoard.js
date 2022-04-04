import React from 'react';
import './AreaChartBoard.css';
import { AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts';

const AreaChartBoard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h1 className='font-semibold text-green-700 text-lg my-4'>Investment vs Revenue</h1>
            <AreaChart
                width={500}
                height={200}
                data={data}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey={"month"} />
                <YAxis />
                <Tooltip />
                {/* <CartesianGrid /> */}
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
};

export default AreaChartBoard;