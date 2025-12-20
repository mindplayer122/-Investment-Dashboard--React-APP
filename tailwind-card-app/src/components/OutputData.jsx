import React from 'react';
import {calInvResult} from '../util/investment';


const OutputData = ({inputValue}) => {
    const resultData = calInvResult({
        intInvestment: +inputValue.intInvestment,
        annInvestment: +inputValue.annInvestment,
        expReturn: +inputValue.expReturn,
        duration: +inputValue.duration
    });

  return (
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest(year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData, index) =>(
                <tr key={index}>
                    <td>{yearData.year}</td>
                    <td>{yearData.intValue}</td>
                    <td>{yearData.interest.toFixed(2)}</td>
                    <td>{yearData.totalInterest.toFixed(2)}</td>
                    <td>{yearData.invCapital.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default OutputData;