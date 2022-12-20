import React, { Component } from "react";
import { Container, Button, Form, Card, Row, Col } from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

//Assets
import qx1 from "../Assets/contact.jpg";
import logo from  "../Assets/log1.png";

//Components
import Footer from "../Components/Footer";

export default class Kontakt extends Component{
    render(){
        return(
            <>
            <div className="yellow">
            <div className="jumbotron jumbotron-fluid">
                <img 
                    style={{width: "100%"}}
                    className="text-center"
                    src={qx1}
                    alt="qx1"
                    />
            </div>

            <MDBTypography variant='h2'className='text-center m-3'>
                        Informacja kontaktowa
            </MDBTypography>
                                    <Card className="page-marg m-4" border="light">
                                        <Card.Img className="logo mx-3" variant="top" src={logo} style={{width:"80px", height:"100px",position: 'absolute', right:'5px'}}/>
                                        <Card.Text>
                                            <div className="text-left m-4">
                                                                <h5>Witalis Dobush</h5>
                                                                        <p>Adres: Ul. Henryka Sienkiewicza nr 18<br/>
                                                                               Miasto: 97-300 Łodz<br/>
                                                                               Kraj: Polska<br/>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                        </p>
                                            </div>
                                        </Card.Text>
                                    </Card>

                <Form className="mb-5" style={{marginLeft: "5rem", marginRight: "5rem"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Twój email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Opisz swój problem"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Sprawdzic mi"/>
                    </Form.Group>
                    <div className="text-center">
                    <Button className="m-3" variant="dark" type="submit">Wyslać wiadomość</Button>
                    </div>
                </Form>
        <br/><br/>
            </div>
        <div className="Footer">
                <Footer/>
            </div>
            </>

            )
        }
    }