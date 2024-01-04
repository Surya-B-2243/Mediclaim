import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Dashboard() {
    const {claim} = useParams()
    const[data, setData]=useState(null);
    const[patientdata, setpatientData]=useState(null);
    axios.defaults.withCredentials = false;
    
  
    useEffect( () =>{
        const getData= async()=>{
            try{
                const claimData = await axios.get("https://hapi.fhir.org/baseR4/Claim/"+claim);
                setData(claimData.data);
                const pData = await axios.get("https://hapi.fhir.org/baseR4/"+claimData.data.patient.reference);
                setpatientData(pData.data);
            }catch(error){
                console.error('Error fetching data',error);
            }
        };
        getData()
    },[])
    
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
                        Provider  : {data.provider.display}
                    </li>
                    <li>
                        Insurance Company : {data.insurance[0].coverage.display}
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
                        Phone Number : {patientdata.telecom[0].value}
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