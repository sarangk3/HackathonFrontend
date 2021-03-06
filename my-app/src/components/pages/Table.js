import React, { useState, useEffect } from 'react';
//import './Table.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom'
//import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import moment from 'moment';

const Table = (props) => {
  const [tableContents, setTableContents] = useState([]);

  useEffect(() => {
    console.log("TABLE DATA  SHOULD UPDATE HERE");
    const options = { url: "http://triage-backend.herokuapp.com/triage/patch", method: "GET" }
    axios(options)
      .then((res) => {
        setTableContents(res.data);
      })
      .catch(err => console.log(err));
  }, [props.notif])


  const patients = [
    { caseNumber: <a href="./Report#Report1Header">1</a>, Ambulance: "Medic A264", ETA: "10 min", Viewed: "No", Timestamp: "2022-03-03T16:26:35" },
    { caseNumber: <a href="./Report#Report2Header">2</a>, Ambulance: "Medic A004", ETA: "15 min", Viewed: "Yes", Timestamp: "2022-02-19T16:26:35" },
    { caseNumber: <a href="./Report#Report3Header">3</a>, Ambulance: "Medic A374", ETA: "25 min", Viewed: "No", Timestamp: "2022-03-10T16:26:35" },
    { caseNumber: <a href="./Report#Report4Header">4</a>, Ambulance: "Medic A269", ETA: "9 min", Viewed: "Yes", Timestamp: "2022-02-28T16:26:35" },
    { caseNumber: <a href="./Report#Report5Header">5</a>, Ambulance: "Medic A196", ETA: "5 min", Viewed: "Yes", Timestamp: "2022-01-31T16:26:35" },

  ]

  const formatTime = (time) => {
    var time = moment(time).format("YY/MM/DD HH:mm:ss")
    return time.toString();
  }

  const renderPatients = (patient, index) => {
    return (
      <tr key={index}>
        <td>{patient.caseNumber}</td>
        <td>{patient.Ambulance}</td>
        <td>{patient.ETA}</td>
        <td>{patient.Viewed}</td>
        <td>{patient.Timestamp}</td>
      </tr>
    )
  }

  const renderPatches = (patch, index) => {
    return (
      <tr key={index}>
        <td><Link to={`${patch._id}`}>{patch._id}</Link></td>
        <td>{patch.operator.name}</td>
        <td>{formatTime(patch.eta)}</td>
        <td>{patch.received ? "Yes" : "No "}</td>
        <td>{formatTime(patch.time)}</td>
      </tr>
    )
  }

  return (
    <div >
      <img src="/ahs.png" alt="Logo" height={120} width={200} />
      <br></br>
      Click on the Case Number in table below to view further details of the case

      <div className="Table" style={{ maxHeight: "700px", overflow: "auto" }}>

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
            {tableContents.map(renderPatches)}
          </tbody>
        </ReactBootStrap.Table>

      </div>
    </div>


  );
}

export default Table;
