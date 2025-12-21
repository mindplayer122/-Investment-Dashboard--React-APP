import React, { useEffect, useState } from 'react';
import {calInvResult} from '../util/investment';
import{ LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts";
import { generatePDF } from '../util/generatePDF';
import { useMemo } from 'react';


const OutputData = ({inputValue}) => {
    const resultData = useMemo(() =>{
        return calInvResult(inputValue);
    }, [inputValue]);

    const maxInterest = Math.max(...resultData.map(item => item.interest));
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [inputValue]);

    if(loading) {
        return<p>Caculating result...</p>;
    }
  return (
    <div className='container'>
        <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData, index) =>(
                <tr key={index} 
                style={{backgroundColor: yearData.interest ===
                 maxInterest ? "#ffff99a1" : "transparent"}}>
                    <td>{yearData.year}</td>
                    <td>{yearData.intValue.toFixed(2)}</td>
                    <td>{yearData.interest.toFixed(2)}</td>
                    <td>{yearData.totalInterest.toFixed(2)}</td>
                    <td>{yearData.invCapital.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>

    <h3>
        Investment Growth Over Time
    </h3>
    <LineChart width={600} height={300} data={resultData}>
        <XAxis dataKey="year"/>
        <YAxis/>
        <Tooltip/>
        <CartesianGrid stroke="#ccc" strokeDasharray={"5 5"}/>
        <Line type="monotone" dataKey="intValue" stroke='#8884d8'/>
        <Line type='monotone' dataKey="totalInterest" stroke="#82ca9d"/>
    </LineChart>

    {resultData.length > 0 && (
        <button onClick={() => generatePDF(resultData, inputValue)}>
            Download PDF Report
        </button>
    )}
    </div> 
  )
}

export default OutputData;