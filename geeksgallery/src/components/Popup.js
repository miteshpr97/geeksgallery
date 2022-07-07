import React from 'react'
import "../App.css"
import { Modal, Container, Button, Col, Row } from 'react-bootstrap';



const Popup = (props) => {
    // console.log(props.modalData)
    return (
        <>
            <Modal
                show={props.showModal}
                onHide={props.closeModal}
                backdrop="static"
                keyboard={false}
                centered
                dialogClassName="modal-70w"
                style={{ backgroundColor: `${props.modalData?.color}77` }}
            >
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "5px" }} src={props.modalData?.urls?.full} alt='popup card' />
                            </Col>
                            <Col md={6}>
                                <h3> Upload By: {props.modalData?.user?.name} (@{props.modalData?.user?.id}) </h3>
                                <h6> {props.modalData?.user?.updated_at}</h6>
                                <hr />

                                {props.modalData?.description ? (
                                    <>
                                        <h5>Description</h5>
                                        <h6>{props.modalData?.description}</h6>
                                        <hr />
                                    </>
                                ) : false}
                                <br />
                                <h6>Width: {props.modalData?.width}</h6>

                                <h6>Height: {props.modalData?.height}</h6>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" href={props.modalData?.links?.download} traget="_blank">Downlaod</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Popup;

