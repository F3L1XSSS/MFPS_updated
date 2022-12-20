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
                                <h3>Pomóż Zbrojnym śiłam Ukrainy!</h3>
                                <Card.Img src={qq2} alt="..." height="500px" width="500px" class="img-thumbnail" />
                                <br/>
                                <br/>
                                <Card.Body>
                                <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                        Międzynarodowa Fundacja Pomocy Społecznej utworzyła zbiórkę pieniędzy dla 92 brygady na Ukrainie i szuka nieobojętnych osób które mogą pomóc nam stworzyć mocną tarczę od agresora. Nasza fundacja zajmuje się pomocą Ukraińcom w Ukrainie, my wspieramy każdego dołączyć się do naszej pracy humanitarnej. Nasz przyjaciel Daniił uprzejmie podszedł do nas i poprosił o pomoc dla swojego zespołu. Daniił i jego przyjaciele od początku wojny bronią Ukrainę i Europę.
                                        Nasi przyjaciele są tarczą całego cywilizowanego świata. Chcemy pomóc im kontynuować ciężką pracę.
                                        Codziennie bronią granicy Ukrainy przed agresorem. Potrzebują pomocy każdego dnia. Każdego dnia ryzykują życiem, aby nasze dzieci mogły żyć w cywilizowanym, demokratycznym świecie przyszłości.
                                        Pomóż chłopakom bronić Europę przed wojną! Każdego dnia oni potrzebują jedzenia, wody i sprzętu! Nasi drodzy bracia z 92 brygady serdecznie proszą nasz Międzynarodowy Fundusz Pomocy Społecznej o stworzenie zgromadzenia pomocy!
                                        Odpowiedzieliśmy i pomogliśmy im stworzyć silną tarczę chroniącą wolność wszystkich cywilizowanych ludzi!<br/>
                                        Wojownicy potrzebują:<br/>
                                        1. 3 pickupy do misji bojowych <br/>
                                        2. 5 dronów Mark 3 do misji bojowych <br/>
                                        3. Pomoc humanitarna (żywność, produkty higieniczne, artykuły medyczne) <br/>
                                        Nasza fundacja zobowiązuje się przekazać wszystko, co niezbędne w Ukrainę!
                                        Proszę nie bądź obojętny! Przekaż darowiznę i rozpowszechnij projekt. To niesamowite, jak 1 złotówka może wpłynąć na to, co dzieje się na świecie!
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