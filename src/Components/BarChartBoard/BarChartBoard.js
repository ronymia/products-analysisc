import React from 'react';
import './BarChartBoard.css';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

const BarChartBoard = () => {
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
            <BarChart width={500} height={200} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
            </BarChart>
        </div>

    );
};

export default BarChartBoard;