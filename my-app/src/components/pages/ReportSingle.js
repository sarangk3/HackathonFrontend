import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const ReportSingle = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const options = {
            url: `http://localhost:3000/triage/patch/${id}`,
            method: "GET"
        }
        console.log(options.url);
        axios(options)
            .then(res => {
                console.log(res.data);
                setInfo(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div className="text-center overflow-auto border rounded" >
            <Card className="text-center">
                <Card.Header className="fw-bold fs-4" > EMS Report - Case#{id}</Card.Header >
                <Card.Body style={{ paddingLeft: "30px", paddingRight: "30px", height: "770px", overflow: "auto" }}>
                    <Form>
                        <Form.Group as={Row} className="mb-3 font-weight-bold text-start border-bottom pb-3">
                            <label for="description" className="fw-bold fs-5">
                                Description:
                            </label>
                            <textarea class="form-control" className="col-12" id="description" rows="3" value={info.notes}>
                            </textarea>

                        </Form.Group>


                        <Form.Group as={Row} className="mb-3 font-weight-bold border-bottom pb-3">
                            <div className="text-start fs-5 fw-bold pb-1">Vital Signs</div>
                            <Form.Label column sm="2" className="font-weight-bold text-xl text-left">
                                <div className="fw-bold ">Respiration (breaths/min): </div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.patient?.vitalSigns.respirations ? info.patient.vitalSigns.respirations : "N/A"} />
                            </Col>
                            <Form.Label column sm="2" className="font-weight-bold text-xl">
                                <div className="fw-bold ">Pulse(BPM): </div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.patient?.vitalSigns.pulse ? info.patient.vitalSigns.pulse : "N/A"} />
                            </Col>
                            <Form.Label column sm="2" className="font-weight-bold text-xl">
                                <div className="fw-bold ">Temperature(Celsius): </div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.patient?.vitalSigns.temperature ? info.patient.vitalSigns.temperature : "N/A"} />
                            </Col>

                            <Form.Label column sm="2" className="font-weight-bold text-xl text-left">
                                <div className="fw-bold ">Blood pressure:</div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.blood_pressure} />
                            </Col>
                            <Form.Label column sm="2" className="font-weight-bold text-xl">
                                <div className="fw-bold ">Blood sugar: </div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.patient?.vitalSigns.blood_sugar ? info.patient.vitalSigns.blood_sugar : "N/A"} />
                            </Col>
                            <Form.Label column sm="2" className="font-weight-bold text-xl">
                                <div className="fw-bold ">Oxygen Saturation(spO2): </div>
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control plaintext readOnly value={info.patient?.vitalSigns.spO2 ? info.patient.vitalSigns.spO2 : "N/A"} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 font-weight-bold text-start pb-4 border-bottom" >
                            <label for="symptoms" className="fw-bold">
                                <div className="text-start fs-5 fw-bold  pb-1">Symptoms</div>
                            </label>
                            <Form.Control class="form-control" className="col-12" id="symptoms" value={info.patient?.treatments}
                                defaultValue={"No symptoms found for patient"} />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 font-weight-bold text-start pb-4 border-bottom" controlId="formPlaintextEmail">
                            <label for="ecg" className="fw-bold">
                                <div className="text-start fs-5 fw-bold pb-1">ECG Interpretation</div>
                            </label>
                            <Form.Control class="form-control" className="col-12" id="ecg" value={info.patient?.ecgInterpretation}
                                defaultValue={"No ECG interpretation found for patient"} />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 font-weight-bold text-start pb-4 border-bottom" controlId="formPlaintextEmail">
                            <label for="treatment" className="fw-bold">
                                <div className="text-start fs-5 fw-bold pb-1">Treatment</div>
                            </label>
                            <Form.Control class="form-control" className="col-12" id="treatment" value={info.patient?.treatments}
                                defaultValue={"No treatments were given to the patient"} />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 font-weight-bold text-start pb-4 border-bottom">
                            <label for="medicalHistory" className="fw-bold">
                                <div className="text-start fs-5 fw-bold pb-1">Patient Medical History</div>
                            </label>
                            <Form.Control class="form-control" className="col-12" id="medicalHistory" value={info.patient?.medicalHistory}
                                defaultValue={"Patient has no prior medical history"} />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Link to="/Table" className="btn btn-success">
                        Return to dashboard
                    </Link>
                </Card.Footer>
            </Card >
        </div >
    )
}

export default ReportSingle