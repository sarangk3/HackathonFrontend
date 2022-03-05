import React from 'react'
import { Toast } from 'react-bootstrap'
import { GoAlert } from 'react-icons/go';
import { AnimatePresence, motion } from 'framer-motion';
import moment from 'moment';

const Notification = ({ setShowNotif, notif }) => {
    const formatTime = (time) => {
        var time = moment(time).format("YY/MM/DD HH:mm:ss")
        return time.toString();
    }
    const close = (e) => {
        e.preventDefault();
        setShowNotif(false);
    }
    if (notif) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}>
                <div className="position-fixed text-white p-5 m-2"
                    style={{
                        bottom: "0",
                        right: "0",
                    }}>
                    <Toast onClose={close} style={{ width: "500px", }}>
                        <Toast.Header style={{ height: "50px", backgroundColor: "#db5858", color: "white" }}>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">New Request</strong>
                            <small>{formatTime(notif.time)}</small>
                        </Toast.Header>
                        <Toast.Body style={{ height: "200px" }}>
                            <div className="d-flex w-100 h-100">
                                <div className="fs-1 h-100 d-flex px-3 pb-3">
                                    <GoAlert fill="#db5858" className="my-auto" />
                                </div>
                                <div className=" ps-3 text-black w-100 d-flex flex-column me-3" style={{ overflow: "auto" }}>
                                    <div className="py-1"><b className="h6 me-1">Symptoms: </b>{notif.symptoms}</div>
                                    <div className="py-1"><b className="h6 me-1">Treatments: </b>{notif.treatmentProvided}</div>
                                    <div className="py-1"><b className="h6 me-1">Medical History: </b>{notif.medicalHistory}</div>
                                    <div className="py-1"><b className="h6 me-1">ETA: </b>{formatTime(notif.eta.toString())}</div>
                                    <div className="py-1"><b className="h6 me-1">Operator: </b>{notif.operator.name}</div>
                                </div>
                            </div>
                        </Toast.Body>
                    </Toast>
                </div >
            </motion.div>
        )
    } else {
        return ""
    }
}

export default Notification