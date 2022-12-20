import React, { Component } from "react";
import { Row, Col, Nav, NavLink, Container, Tab, TabContent, TabPane, Card, CardGroup, Form, Button, ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTypography } from 'mdb-react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//Assets
import qq1 from "../Assets/qq1.jpg";
import qq11 from "../Assets/qq11.jpg";
import qq2 from "../Assets/qq2.jpg";
import qq3 from "../Assets/qq3.jpg";
import qq6 from "../Assets/qq6.jpg";

import logo from "../Assets/log1.png";

//Components
import Footer from "../Components/Footer";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default class Kontakt extends Component{
    render(){
        return(
            <>
            <div className="yellow">
                <Row>
                    <Col sm="8" style={{marginLeft: 'auto', marginRight: "auto"}}>
                    <CardHeader>
                    
                            <div className="m-4">
                                <h3>Centrum społeczne społeczności polsko-ukraińskiej</h3>
                                <Card.Img src={qq6} alt="..." height="500px" width="500px" class="img-thumbnail" />
                                <br/>
                                <br/>
                                <Card.Body>
                                <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                        <h5>Cele projektu:</h5>
                                            1. Projekt powstał w celu wzmocnienia relacji polsko-ukraińskich na poziomie międzynarodowym i krajowym.<br/>
                                            2. Projekt ma na celu określenie pomocy strony polskiej w rozwiązywaniu problemów Ukrainy oraz wezwanie społeczności światowej do dalszego wspierania Polski w ramach wzmocnienia wartości demokratycznych cywilizowanego świata.<br/>
                                            3. Umieszczenie uchodźców ukraińskich w celu tworzenia mieszkań samo utrwalających się, tworzenia miejsc pracy w ramach przedsiębiorczości społecznej i zatrudnienia na lokalnym rynku pracy.<br/>
                                            4. Integracja społeczna i kulturowa Ukraińców ze społeczeństwem polskim poprzez zorganizowaną działalność edukacyjną, a także tworzenie kilku przedsiębiorstw o ​​charakterze społecznym, opartych na centrum, takich jak kuchnia ukraińska, sklep z pamiątkami, siłownia, salon kosmetyczny, kursy języka polskiego itp. . dla dalszego zatrudnienia Ukraińców.<br/>
                                            5. Odciążenie budżetu Polski. Według różnych ośrodków analitycznych liczba Ukraińców w Polsce przekroczyła granicę trzech milionów. Dzięki stworzeniu takich projektów możliwe będzie przezwyciężenie problemów z obciążeniem polskiego budżetu, a także przyciągnięcie dodatkowych inwestycji do polskiego budżetu na poziomie międzynarodowym.<br/>
                                            6. Zaangażowanie międzynarodowych organizacji w celu współpracy i zacieśniania stosunków między Polską a Unią Europejską, Ameryką, Kanadą.<br/>
                                            7. Przeniesienie polskiej przedsiębiorczości społecznej na poziom międzynarodowy w ramach tworzenia większej liczby takich projektów zarówno w kraju, jak i za granicą.<br/>
                                            8. Bezpośrednie poparcie dla jasnej i silnej polityki państwa polskiego i podążania ścieżką polityczną.<br/>
                                </MDBTypography>

                                <br/>
                                <Button href="/paypal" variant="outline-dark">Twoje wsparcie</Button>
                                </Card.Body>
                                
                            </div>
                              </CardHeader>
            <br/>
                    <div className="m-4">
                        <h2 className="title">INNE PROJECTY</h2>
                    </div>
                <div>
            <NavLink href="/infoq2">
                <Card className="m-4" style={{maxWidth: "60rem"}}>
                    <Row>
                        <Col sm="5">
                    
                    <Card.Img className="btn img" variant="top" src={qq1} />
                    </Col>
                    <Col sm="7">
                        <Card.Body>
                            <Card.Title>Zwierzęta na Ukrainie</Card.Title>
                            <Card.Text>
                            Pomóż nam nakarmić bezdomne zwierzęta
                            </Card.Text>
                        </Card.Body>
                        </Col>
                        </Row>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </NavLink>
                    <br/>
                    <br/>
                    <NavLink href="/infoq2">
                <Card className="m-4" style={{maxWidth: "60rem"}}>
                    <Row>
                        <Col sm="5">
                    
                    <Card.Img className="btn img" variant="top" src={qq2} />
                    </Col>
                    <Col sm="7">
                        <Card.Body>
                            <Card.Title>Pomoc ZSU</Card.Title>
                            <Card.Text>
                                Pomóż zbrojnym śiłam Ukrainy
                            </Card.Text>
                        </Card.Body>
                        </Col>
                        </Row>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </NavLink>
                        <br/>
                        <br/>

                        <NavLink href="/infoq6">
                        <Card className="m-4" style={{maxWidth: "60rem"}}>
                        <Row>
                        <Col sm="5">
                            <Card.Img className="btn img" variant="top" src={qq6} />
                            </Col>
                            <Col>
                            <Card.Body>
                                <Card.Title>Dom Ukrainca</Card.Title>
                                    <Card.Text>
                                        Centrum społeczne społeczności polsko-ukraińskiej
                                    </Card.Text>   
                            </Card.Body>
                            </Col>
                            </Row>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                            
                        </Card>
                    </NavLink>
                    </div>
                    </Col>
                <Col sm="3" className="page-lblue">
                            <ListGroup variant='flush' style={{marginTop: "3rem", marginRight: "1rem"}} className="page-lblue">

                          <img  className="logo" variant="top" src={logo} style={{width:"80px", height:"100px",position: 'relative', right:'5px', marginRight: "auto", marginLeft: "auto"}} />
                          <Card.Header><h4 className="text-center">Potrzebują naszej pomocy</h4></Card.Header>
                            <p tag='small' className="text-center">Nasze Projekty  - to więcej niż zbiórka pomocy charytatywnej,<br/> to stowarzyszenie dla wspólnego celu.</p>


                                            <Nav.Link href="/infoq2">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={qq2} style={{marginTop: "2rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                            <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Pomoc ZSU</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Pomóż zbrojnym śiłam</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                        <br/>

                                            <Nav.Link href="/infoq3">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={qq3} style={{marginTop: "4rem"}} />                                          
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Wsparcie biednym</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>NAPRAWDĘ potrzebujemy waszej pomocy</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                    <br/>

                                    <Nav.Link href="/infoq1">
                                        <Row>
                                            <Col sm={5}>
                                                <Card.Img className="img btn img-thumbnail" variant="top" src={qq1} style={{marginTop: "3rem"}}/>
                                            </Col>
                                            <Col sm={7}>
                                                <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Zwierzęta na Ukrainie</h5>
                                                <p className="text-center" style={{marginRight: "30px"}}>Pomóż nam nakarmić bezdomne zwierzęta</p>
                                            </Col>
                                        </Row>
                                    </Nav.Link>
                                    <br/>
                                    <br/>
                            </ListGroup>
                </Col>
                    
                </Row>

            </div>
         <div className="Footer">
                <Footer/>
            </div>
    
    </>
        )
    }
}