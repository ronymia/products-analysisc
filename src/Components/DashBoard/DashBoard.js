import React, { useEffect, useState } from 'react';
import AreaChartBoard from '../AreaChartBoard/AreaChartBoard';
import LineChartBoard from '../LineChartBoard/LineChartBoard';
import BarChartBoard from "../BarChartBoard/BarChartBoard";
import PieChartBoard from '../PieChartBoard/PieChartBoard';
import './DashBoard.css';

const DashBoard = () => {

    const [sellsAnalysis, setSellsAnalysis] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setSellsAnalysis(data))
    }, []);

    return (
        <div className='container mx-auto mt-8 grid grid-cols-2 gap-20'>
            <LineChartBoard></LineChartBoard>
            <AreaChartBoard></AreaChartBoard>
            <BarChartBoard></BarChartBoard>
            <PieChartBoard></PieChartBoard>
        </div>
    );
};

export default DashBoard;