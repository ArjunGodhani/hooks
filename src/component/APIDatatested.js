
import React, { useEffect, useState } from 'react';
function APIDatatested() {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.tested);
        setData(actualData.tested);
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
                        <th>dailyrtpcrsamplescollectedicmrapplication</th>
                        <th>firstdoseadministered</th>
                        <th>frontlineworkersvaccinated1stdose</th>
                        <th>frontlineworkersvaccinated2nddose</th>
                        <th>healthcareworkersvaccinated1stdose</th>
                        <th>healthcareworkersvaccinated2nddose</th>
                        <th>over45years1stdose</th>
                        <th>over45years2nddose</th>
                        <th>over60years1stdose</th>
                        <th>over60years2nddose</th>
                        <th>positivecasesfromsamplesreported</th>
                        <th>registrationabove45years</th>
                        <th>registrationflwhcw</th>
                        <th>registrationonline</th>
                        <th>registrationonspot</th>
                        <th>samplereportedtoday</th>
                        <th>seconddoseadministered</th>
                        <th>source</th>
                        <th>source2</th>
                        <th>source3</th>
                        <th>source4</th>
                        <th>testedasof</th>
                        <th>testsconductedbyprivatelabs</th>
                        <th>totaldosesadministered</th>
                        <th>totaldosesavailablewithstates</th>
                        <th>totaldosesavailablewithstatesprivatehospitals</th>
                        <th>totaldosesinpipeline</th>
                        <th>totaldosesprovidedtostatesuts</th>
                        <th>totalindividualsregistered</th>
                        <th>totalindividualstested</th>
                        <th>totalpositivecases</th>
                        <th>totalrtpcrsamplescollectedicmrapplication</th>
                        <th>totalsamplestested</th>
                        <th>totalsessionsconducted</th>
                        <th>totalvaccineconsumptionincludingwastage</th>
                        <th>updatetimestamp</th>
                        <th>years1stdose</th>
                        <th>years2nddose</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailyrtpcrsamplescollectedicmrapplication}</td>
                                    <td>{curElem.firstdoseadministered}</td>
                                    <td>{curElem.frontlineworkersvaccinated1stdose}</td>
                                    <td>{curElem.frontlineworkersvaccinated2nddose}</td>
                                    <td>{curElem.healthcareworkersvaccinated1stdose}</td>
                                    <td>{curElem.healthcareworkersvaccinated2nddose}</td>
                                    <td>{curElem.over45years1stdose}</td>
                                    <td>{curElem.over45years2nddose}</td>
                                    <td>{curElem.over60years1stdose}</td>
                                    <td>{curElem.over60years2nddose}</td>
                                    <td>{curElem.positivecasesfromsamplesreported}</td>
                                    <td>{curElem.registrationabove45years}</td>
                                    <td>{curElem.registrationflwhcw}</td>
                                    <td>{curElem.registrationonline}</td>
                                    <td>{curElem.registrationonspot}</td>
                                    <td>{curElem.samplereportedtoday}</td>
                                    <td>{curElem.seconddoseadministered}</td>
                                    <td>{curElem.source}</td>
                                    <td>{curElem.source2}</td>
                                    <td>{curElem.source3}</td>
                                    <td>{curElem.source4}</td>
                                    <td>{curElem.testedasof}</td>
                                    <td>{curElem.testsconductedbyprivatelabs}</td>
                                    <td>{curElem.totaldosesadministered}</td>
                                    <td>{curElem.totaldosesavailablewithstates}</td>
                                    <td>{curElem.totaldosesavailablewithstatesprivatehospitals}</td>
                                    <td>{curElem.totaldosesinpipeline}</td>
                                    <td>{curElem.totaldosesprovidedtostatesuts}</td>
                                    <td>{curElem.totalindividualsregistered}</td>
                                    <td>{curElem.totalindividualstested}</td>
                                    <td>{curElem.totalpositivecases}</td>
                                    <td>{curElem.totalrtpcrsamplescollectedicmrapplication}</td>
                                    <td>{curElem.totalsamplestested}</td>
                                    <td>{curElem.totalsessionsconducted}</td>
                                    <td>{curElem.totalvaccineconsumptionincludingwastage}</td>
                                    <td>{curElem.updatetimestamp}</td>
                                    <td>{curElem.years1stdose}</td>
                                    <td>{curElem.years2nddose}</td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}


export default APIDatatested;