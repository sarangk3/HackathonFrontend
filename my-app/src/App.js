// import React from 'react';
// import './App.css';
// import * as ReactBootStrap from "react-bootstrap";
// import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';


// const App = (props) => {
//   const patients = [
//     {caseNumber: "1", Ambulance: "Medic A264", ETA: "10 min", Viewed: "Yes", Timestamp: "2022-03-03T16:26:35"},
//     {caseNumber: "2", Ambulance: "Medic A004", ETA: "15 min", Viewed: "Yes", Timestamp: "2022-02-19T16:26:35"},
//     {caseNumber: "3", Ambulance: "Medic A374", ETA: "25 min", Viewed: "Yes", Timestamp: "2022-03-10T16:26:35"}, 
//     {caseNumber: "4", Ambulance: "Medic A269", ETA: "9 min", Viewed: "Yes", Timestamp: "2022-02-28T16:26:35"},
//     {caseNumber: "5", Ambulance: "Medic A196", ETA: "5 min", Viewed: "Yes", Timestamp: "2022-01-31T16:26:35"},

//   ]

//   const renderPatients = (patient, index) => {
//     return( 
//       <tr key={index}>
//         <td>{patient.caseNumber}</td>
//         <td>{patient.Ambulance}</td>
//         <td>{patient.ETA}</td>
//         <td>{patient.Viewed}</td>
//         <td>{patient.Timestamp}</td>
//       </tr>
//     )
//   }

//   return (
//     <div className = "App">
//     <img src="/ahs.png" alt="Logo"  height={120} width={200} />
//     {/* <br>   <b>Incoming Patient Information </b> </br> */}

//     <ReactBootStrap.Table striped bordered hover >

//     <thead>
//     <tr>

//       <th>Case Number</th>
//       <th>Ambulance</th>
//       <th>ETA</th>
//       <th>Viewed</th>
//       <th>Timestamp</th>
//     </tr>
//   </thead>
//   <tbody>
//     {patients.map(renderPatients)}
//   </tbody>
// </ReactBootStrap.Table>
//     </div>


//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Table from './components/pages/Table';
//import Report from './components/pages/Report';
import ReportSingle from './components/pages/ReportSingle';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import socketIOClient from "socket.io-client";
import Notification from './components/Notification';
import { AnimatePresence } from 'framer-motion';
const socketEndpoint = "http://triage-backend.herokuapp.com";



function App() {
	const [showNotif, setShowNotif] = useState();
	const [notif, setNotif] = useState();


	useEffect(() => {
		const socket = socketIOClient(socketEndpoint);
		socket.emit("newHospital", { hospital: "FoothillsHospital" })

		socket.on("notification", (data) => {
			setShowNotif(true);
			setNotif(data);
			console.log("Got notif");
			console.log(data);

		})

	}, [])


	const queryClient = new QueryClient({

	});
	return (
		<QueryClientProvider client={queryClient}>
			<AnimatePresence exitBeforeEnter>
				<Router>
					<Navbar />
					<div className="col-10 offset-1 pt-3">
						<Routes>
							<Route exact path='/' element={<Home />} />
							<Route exact path='/Table' element={<Table notif={notif} />} />
							<Route path="/Table/:id" element={<ReportSingle />} />
							{/* <Route path='/Report' element={<Report />} /> */}
						</Routes>
					</div>
					{showNotif ?
						<Notification setShowNotif={setShowNotif} notif={notif} /> : ""}
				</Router>
			</AnimatePresence>
		</QueryClientProvider>
	);
}

export default App;
