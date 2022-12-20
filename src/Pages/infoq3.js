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
                                <h3>Wsparcie biednym!</h3>
                                <Card.Img src={qq3} alt="..." height="500px" width="500px" class="img-thumbnail" />
                                <br/>
                                <br/>
                                <Card.Body>
                                <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                Reprezentujemy Międzynarodową Fundację Ochrony Socjalnej. Jesteśmy w Polsce i pomagamy poszkodowanym ludziom na Ukrainie. Naprawdę potrzebujemy waszej pomocy w zbieraniu funduszy.<br/>
 
 Pracujemy tylko z osobami starszymi, niepełnosprawnymi, rodzinami o niskich dochodach, wielodzietnymi, które nie mogą opuścić strefy działań wojennych. Od początku wojny pomagamy organizacjom niepełnosprawnym, domom opieki, domom dziecka, grupom wolontariuszy dostarczających żywność i paczki żywnościowe osobom niewidomym i obłożnie chorych, osobom starszym powyżej 75 roku życia, wielodzietnym rodzinom z małymi dziećmi z wyżywieniem, lekarstwami i higieny.<br/>
 Wiele produktów wysyłamy do ochotniczych kuchni polowych, które przygotowują ciepłe posiłki dla osób przebywających w piwnicach i schronach przeciw bombowych, dla naszych żołnierzy i lekarzy. Leki i produkty są wysyłane do szpitala wojskowego, szpitali regionalnych i miejskich w nagłych przypadkach, na linię frontu naszych obrońców.<br/>

 Od samego początku wojny pomagamy ofiarom na Ukrainie dostarczając żywność, artykuły higieniczne i niezbędne artykuły. I każdego dnia przybywają dziesiątki nowych osób, które potrzebują pomocy, bo na Ukrainie pozostają setki tysięcy ludzi, którym bardzo brakuje jedzenia. Ludzie nie mogą opuszczać miast - z powodu wieku lub choroby. Tysiące ludzi od ponad dwóch miesięcy mieszka w piwnicach i schronach przeciw bombowych, bez prądu i możliwości ugotowania czegoś. Tysiące ludzi jest w swoich domach, przykutych do łóżka, potrzebujących jedzenia i lekarstw.<br/>

 Zebrane środki planujemy przeznaczyć na zakup leków dla osób starszych i niepełnosprawnych. Są to leki nasercowe, uspokajające, przeciw przeziębieniu, leki na nadciśnienie, do leczenia onkologii, opatrunki. Planowany jest również zakup warzyw, zbóż, konserw dla domów opieki, organizacji niepełnosprawnych, szpitali. Część funduszy potrzebna jest na paliwo dla wolontariuszy, którzy będą dostarczać pomoc humanitarną i ukierunkowane dostawy do osób, które nie mogą opuścić swoich domów.<br/>

 Dziękujemy za każdą kwotę, którą możesz nam przekazać!
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