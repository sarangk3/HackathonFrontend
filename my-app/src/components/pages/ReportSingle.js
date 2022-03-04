import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

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
        <div>
            <Card className="text-center">
                <Card.Header>Patch#{id}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default ReportSingle