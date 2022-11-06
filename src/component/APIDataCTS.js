import "./APIDataCTS.css";
import React, { useEffect, useState } from 'react';
function APIDataCTS() {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <h1> <span className="yellow">India Covid 19 Dashboard</span></h1>
            

            <table className="container">
                <thead>
                    <tr>
                        <th>Daily Confirmed</th>
                        <th>Daily Deceased</th>
                        <th>Daily Recovered</th>
                        <th>Date</th>
                        <th>Date YMD</th>
                        <th>Total Confirmed</th>
                        <th>Total Deceased</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailyconfirmed}</td>
                                    <td>{curElem.dailydeceased}</td>
                                    <td>{curElem.dailyrecovered}</td>
                                    <td>{curElem.date}</td>
                                    <td>{curElem.dateymd}</td>
                                    <td>{curElem.totalconfirmed}</td>
                                    <td>{curElem.totaldeceased}</td>
                                    <td>{curElem.totalrecovered}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}


export default APIDataCTS;