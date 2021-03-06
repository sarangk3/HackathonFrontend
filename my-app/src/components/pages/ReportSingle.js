import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useQueryClient } from 'react-query';
import { Bars } from 'react-loader-spinner';


import { Link } from 'react-router-dom'

const ReportSingle = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams();


    const queryClient = useQueryClient();
    const { isLoading, isError, data } = useQuery('individualReport', () => axios({
        url: `http://triage-backend.herokuapp.com/triage/patch/${id}`,
        method: "GET",
    }).then(res => res.data)
    )




    useEffect(() => {
        const options = {
            url: `http://triage-backend.herokuapp.com/triage/patch/${id}`,
            method: "GET"
        }
        axios(options)
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    if (isLoading) {
        return (
            <div className="w-100 h-100 d-flex justify-content-center">
                <Bars color="#59c275" height="100px" width="500px" />
            </div>
        )
    } else {
        return (
            <div className="text-center overflow-auto border rounded" >
                <Card className="text-center">
                    <Card.Header className="fw-bold fs-4 text-dark"
                        style={{
                            backgroundColor: "#41ba6a"
                        }}> EMS Report - Case#{id}</Card.Header >
                    <Card.Body style={{ paddingLeft: "30px", paddingRight: "30px", height: "730px", overflow: "auto" }}>
                        <Form>
                            <Form.Group as={Row} className="mb-2 font-weight-bold text-start border-bottom pb-3">
                                <label for="description" className="fw-bold fs-5">
                                    Description:
                                </label>
                                <textarea class="form-control" className="col-12" id="description" rows="3" value={data.notes}>
                                </textarea>

                            </Form.Group>
                            <Form.Group as={Row} className="mb-2 font-weight-bold border-bottom pb-3">
                                <div className="text-start fs-5 fw-bold pb-1">Vital Signs</div>
                                <Form.Label column sm="2" className="font-weight-bold text-xl text-left">
                                    <div className="fw-bold ">Respiration (breaths/min): </div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.respiration ? data.vitalSigns.respiration : "N/A"} />
                                </Col>
                                <Form.Label column sm="2" className="font-weight-bold text-xl">
                                    <div className="fw-bold ">Pulse(BPM): </div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.pulse ? data.vitalSigns.pulse : "N/A"} />
                                </Col>
                                <Form.Label column sm="2" className="font-weight-bold text-xl">
                                    <div className="fw-bold ">Temperature(Celsius): </div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.temperature ? data.vitalSigns.temperature : "N/A"} />
                                </Col>

                                <Form.Label column sm="2" className="font-weight-bold text-xl text-left">
                                    <div className="fw-bold ">Blood pressure:</div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.blood_pressure ? data.vitalSigns.blood_pressure : "N/A"} />
                                </Col>
                                <Form.Label column sm="2" className="font-weight-bold text-xl">
                                    <div className="fw-bold ">Blood sugar: </div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.blood_sugar ? data.vitalSigns.blood_sugar : "N/A"} />
                                </Col>
                                <Form.Label column sm="2" className="font-weight-bold text-xl">
                                    <div className="fw-bold ">Oxygen Saturation(spO2): </div>
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control plaintext readOnly value={data?.vitalSigns.spO2 ? data.vitalSigns.spO2 : "N/A"} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2 font-weight-bold text-start pb-4 border-bottom" >
                                <label for="symptoms" className="fw-bold">
                                    <div className="text-start fs-5 fw-bold  pb-1">Symptoms</div>
                                </label>
                                <Form.Control class="form-control" className="col-12" id="symptoms" value={data.symptoms}
                                    defaultValue={"No symptoms found for patient"} />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2 font-weight-bold text-start pb-4 border-bottom" controlId="formPlaintextEmail">
                                <label for="ecg" className="fw-bold">
                                    <div className="text-start fs-5 fw-bold pb-1">ECG Interpretation</div>
                                </label>
                                <Form.Control class="form-control" className="col-12" id="ecg" value={data.ecg}
                                    defaultValue={"No ECG interpretation found for patient"} />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2 font-weight-bold text-start pb-4 border-bottom" controlId="formPlaintextEmail">
                                <label for="treatment" className="fw-bold">
                                    <div className="text-start fs-5 fw-bold pb-1">Treatment</div>
                                </label>
                                <Form.Control class="form-control" className="col-12" id="treatment" value={data.treatmentProvided}
                                    defaultValue={"No treatments were given to the patient"} />
                            </Form.Group>

                            <Form.Group as={Row} className="font-weight-bold text-start pb-4 border-bottom">
                                <label for="medicalHistory" className="fw-bold">
                                    <div className="text-start fs-5 fw-bold pb-1">Patient Medical History</div>
                                </label>
                                <Form.Control class="form-control" className="col-12" id="medicalHistory" value={data.medicalHistory}
                                    defaultValue={"Patient has no prior medical history"} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/Table" className="btn" style={{ backgroundColor: "#41ba6a" }}>
                            Return to dashboard
                        </Link>
                    </Card.Footer>
                </Card >
            </div >
        )
    }
}

export default ReportSingle