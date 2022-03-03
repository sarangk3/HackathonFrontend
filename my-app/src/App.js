import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";


const App = () => {
  const patients = [
    {leftCol: "Name", rightCol: "Billy Joel"},
    {leftCol: "Age", rightCol: "45"},
    {leftCol: "Healthcare #", rightCol: "5987-2618"}, 
    {leftCol: "Gender", rightCol: "M"},
    {leftCol: "Hospital", rightCol: "FMC"},
    {leftCol: "Pain (1-10)", rightCol: "7"}, 
    {leftCol: "Blood Pressure", rightCol: "148/70"},
    {leftCol: "Pulse", rightCol: "78"},
    {leftCol: "Pulse Ox", rightCol: "82%"}, 
  ]
  
  const renderPatients = (patient, index) => {
    return( 
      <tr key={index}>
        <td>{patient.leftCol}</td>
        <td>{patient.rightCol}</td>
      </tr>
    )
  }

  return (
    <div className = "App">
    <img src="/ahs.png" alt="Logo"  height={120} width={200} />

    <ReactBootStrap.Table striped bordered hover >
    <b>Incoming Patient Information </b>
  <tbody>
    {patients.map(renderPatients)}
  </tbody>
</ReactBootStrap.Table>
    </div>


  );
}

export default App;
