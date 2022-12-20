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
                                <h3>Pomóż nam nakarmić bezdomne zwierzęta!</h3>
                                <Card.Img src={qq1} alt="..." height="500px" width="500px" class="img-thumbnail" />
                                <br/>
                                <br/>
                                <Card.Body>
                                <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                Międzynarodowy Fundacja Pomocy Społecznej zbiera fundusze dla obrońców <br/>
                                bezdomnych zwierząt na Ukrainie. Zwraca się do nas wielu troskliwych ludzi,<br/>
                                którzy mają misję uratowania jak największej liczby zwierząt pozostawionych<br/>
                                bez opieki podczas działań wojennych i zapobieżenia katastrofie humanitarnej.<br/>
                                Do rozwiązania każdej sytuacji podchodzimy indywidualnie i opracowujemy nowoczesne<br/>
                                rozwiązania, aby pomóc każdemu, kto tego potrzebuje.<br/>
                                Tysiące bezdomnych zwierząt potrzebują teraz opieki, jedzenia i lekarstw.<br/>
                                Teraz potrzebują Twojej pomocy!<br/>
                                Międzynarodowy Fundusz Pomocy Społecznej prowadzi zbiórkę pieniędzy dla naszychprzyjaciół z Ukrainy.<br/>
                                Wspomóż i udostępnij nasz projekt. Nie wyobrażasz sobie jak 1 zł może uratować życie!<br/>
                                Historia zaczyna się od naszych przyjaciół. Kot Tajson i Pitbull Spajku.<br/>
                                Przedstawicieli braci mniejszych musieli zostać ewakuowani z Charkowa w pierwszych dniach wojny.<br/>
                                Wytrwale wytrzymali cios i aby ratować życie, musieli opuścić dom i przejechać przez całą Ukrainę.<br/>
                                Po drodze zwierzęta byli w różnych schroniskach i za każdym razem byli zaskoczeni - ile bezdomnych<br/>
                                zwierząt potrzebuje jedzenia i lekarstw! W każdym schronisku Tajson i Spajk przyciągnęli<br/>
                                do tego problemu troskliwych ludzi i odnieśli sukces! Mają wielu przyjaciół na Ukrainie,<br/>
                                którzy KAŻDEGO DNIA potrzebują pomocy! Kot Tajson i Pies Spajk apelują o pomoc w zbieraniu<br/>
                                funduszy na pomoc schroniskom na Ukrainie!<br/><br/><br/>

                                Pomożcie Uratować Naszych Braci Mniejszych w Ukrainie!
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
                    <NavLink href="/infoq3">

                        <Card className="m-4" style={{maxWidth: "60rem"}}>
                        <Row>
                        <Col sm="5">
                            <Card.Img className="btn img" variant="top" src={qq3} />
                            </Col>
                            <Col>
                            <Card.Body>
                                <Card.Title>Wsparcie biednym</Card.Title>
                                <Card.Text>
                                    NAPRAWDĘ potrzebujemy waszej pomocy
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

                    <NavLink href="infoq6">
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
                                            <Nav.Link href="/infoq6">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={qq6} style={{marginTop: "3rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Dom Ukrainca</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Centrum społeczne społeczności polsko-ukraińskiej</p>
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