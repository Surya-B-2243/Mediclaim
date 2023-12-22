/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const[data, setData]=useState(null);
    const[patientdata, setpatientData]=useState(null);
    axios.defaults.withCredentials = false;
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response = await axios.get('https://hapi.fhir.org/baseR4/Claim/49024');
                setData(response.data);
            }catch(error){
                console.error('Error fetching data',error);
            }
            try{
                const response = await axios.get('https://hapi.fhir.org/baseR4/Patient/49006');
                setpatientData(response.data);
            }catch(error){
                console.error('Error fetching data',error);
            }
        };
        fetchdata();
    },[]);
    return(
        <div>
            {(data && patientdata &&
            <><h1>This data is from fhir test server</h1><ul>
                <h2>Claim Details :</h2>
                    <li>
                        Id : {data.id}
                    </li>
                    <li>
                        Billable Period: {data.billablePeriod.start} to {data.billablePeriod.end}
                    </li>
                    <li>
                        Total: {data.total.value} {data.total.currency}
                    </li>
                    <h2>Patient Details :</h2>
                    <li>
                        Name : {patientdata.name[0].family}
                    </li>
                    <li>
                        Gender : {patientdata.gender}
                    </li>
                    <li>
                        Birth Date : {patientdata.birthDate}
                    </li>
                    <li>
                        Phone Number : {patientdata.telecom.value}
                    </li>
                    <li>
                        Type : {patientdata.telecom[0].use}
                    </li>
                     

                </ul></>
)}
        </div>
    )
}
export default Dashboard;