import React from 'react';
//import './Table.css';
import * as ReactBootStrap from "react-bootstrap";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';


const Table = (props) => {
  const patients = [
    {caseNumber:  <a href="./Report">1</a>, Ambulance: "Medic A264", ETA: "10 min", Viewed: "No", Timestamp: "2022-03-03T16:26:35"},
    {caseNumber: <a href="./Report2">2</a>, Ambulance: "Medic A004", ETA: "15 min", Viewed: "Yes", Timestamp: "2022-02-19T16:26:35"},
    {caseNumber: <a href="./Report3">3</a>, Ambulance: "Medic A374", ETA: "25 min", Viewed: "No", Timestamp: "2022-03-10T16:26:35"}, 
    {caseNumber: <a href="./Report4">4</a>, Ambulance: "Medic A269", ETA: "9 min", Viewed: "Yes", Timestamp: "2022-02-28T16:26:35"},
    {caseNumber: <a href="./Report5">5</a>, Ambulance: "Medic A196", ETA: "5 min", Viewed: "Yes", Timestamp: "2022-01-31T16:26:35"},
   
  ]
  
  const renderPatients = (patient, index) => {
    return( 
      
      <tr key={index}>
        <td>{patient.caseNumber}</td>
        <td>{patient.Ambulance}</td>
        <td>{patient.ETA}</td>
        <td>{patient.Viewed}</td>
        <td>{patient.Timestamp}</td>
      </tr>
    )
  }

  return (
    <div>
      <img src="/ahs.png" alt="Logo"  height={120} width={200} />
      <br></br>
      Click on the Case Number in table below to view further details of the case

    <div className = "Table">
    
    {/* <br>   <b>Incoming Patient Information </b> </br> */}
   
    <ReactBootStrap.Table striped bordered hover >
      
    <thead>
    <tr>
      
      <th>Case Number</th>
      <th>Ambulance</th>
      <th>ETA</th>
      <th>Viewed</th>
      <th>Timestamp</th>
    </tr>
  </thead>
  <tbody>
    {patients.map(renderPatients)}
  </tbody>
</ReactBootStrap.Table>
    
    </div>
    </div>


  );
}

export default Table;
