/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppNavbar from "./topbar";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button"


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
            <>
            <AppNavbar/>
            <section id='blog' className='block blog-block'>
              <Container fluid>
                <h2 style={{color:"#31572c"}}>Details :</h2>
                <Row>
                  <Col sm={6}>
                    <Card >
                    <Card.Img variant="top" src="../public/lawyer-broker-hr-manager-signing-600nw-2186930821.png" />
                    <Card.Body>
                      <Card.Title>Claim Details</Card.Title>
                      <Card.Text>
                        Details Regarding the claim as per fhir norms:
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Id : {data.id}</ListGroup.Item>
                      <ListGroup.Item>Billable Start : {data.billablePeriod.start}</ListGroup.Item>
                      <ListGroup.Item>Billable End : {data.billablePeriod.end}</ListGroup.Item>
                      <ListGroup.Item>Provider  : {data.provider.display}</ListGroup.Item>
                      <ListGroup.Item>Insurance Company : {data.insurance[0].coverage.display}</ListGroup.Item>
                      <ListGroup.Item>Total: {data.total.value} {data.total.currency}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  </Col>

                  <Col sm={6}>
                    <Card >
                    <Card.Img variant="top" src="../public/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.png" sizes=''/>
                    <Card.Body>
                      <Card.Title>Patient Details</Card.Title>
                      <Card.Text>
                      Patient Details as per FHIR norms.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Name : {patientdata.name[0].family}</ListGroup.Item>
                      <ListGroup.Item>Gender : {patientdata.gender}</ListGroup.Item>
                      <ListGroup.Item>Birth Date : {patientdata.birthDate}</ListGroup.Item>
                      <ListGroup.Item>Phone Number : {patientdata.telecom[0].value}</ListGroup.Item>
                      <ListGroup.Item>Type : {patientdata.telecom[0].use}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button variant="success">
                        Claim
                      </Button>
                    </Card.Body>
                  </Card>
                  </Col>

                </Row>
              </Container>
            </section>
            </>
)}
        </div>
    )
}
export default Dashboard;