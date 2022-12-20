import React, { Component } from "react";
import { Card, CardGroup, CardImg, Button, Container, Col, Row, NavLink, ListGroup, Nav } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

import { MDBTypography } from 'mdb-react-ui-kit';

//Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Assets
import qq1 from "../Assets/cat22.png";
import qq2 from "../Assets/VSU2.png";
import m6 from "../Assets/m6.png";
import qq3 from "../Assets/qq3.jpg";
import qq4 from "../Assets/qq4.jpg";
import qq5 from "../Assets/qq5.jpg";
import qq6 from "../Assets/qq6.jpg";
import Baner from "../Assets/Bangl.jpg";
import Footer from "../Components/Footer";
import { StyleSheetManager } from "styled-components";
import CardHeader from "react-bootstrap/esm/CardHeader";

import logo from "../Assets/log1.png";

export default class Glówna extends Component{
    render(){
        return(
            <>
            <div>
                <Row>
                    <Col sm="9" className="yellow">

                <div className="yellow">
                    <CarouselBox />
                </div>
                <div className="yellow">
                    <div className="text-center">
                        <p><br/></p>
                        <h2 className="title">NASZE PROJECTY</h2>
                    </div>

                    <NavLink href="/infoq1">
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

            <h1><br/></h1>
                <div className="mx-5 d-block">
                            <Card.Img variant="top" src={m6} alt="..." class="img-fluid mx-auto d-block m-2"/> 
                                <Card.Body>
                                <CardHeader><h2 className="title text-center m-4">Zebranie dla zespołu</h2></CardHeader>
                                    <Card.Text>
                                    <MDBTypography tag='medium'>
                            Międzynarodowa Fundacja Pomocy Społecznej utworzyła zbiórkę pieniędzy dla 92 brygady na Ukrainie i szuka nieobojętnych osób które mogą pomóc nam stworzyć mocną tarczę od agresora.
                            Nasza fundacja zajmuje się pomocą Ukraińcom w Ukrainie, my wspieramy każdego dołączyć się do naszej pracy humanitarnej.
                            Nasz przyjaciel Daniił uprzejmie podszedł do nas i poprosił o pomoc dla swojego zespołu. Daniił i jego przyjaciele od początku wojny bronią Ukrainę i Europę.
                            Nasi przyjaciele są tarczą całego cywilizowanego świata. Chcemy pomóc im kontynuować ciężką pracę.
                            Codziennie bronią granicy Ukrainy przed agresorem. Potrzebują pomocy każdego dnia. Każdego dnia ryzykują życiem, aby nasze dzieci mogły żyć w cywilizowanym, demokratycznym świecie przyszłości.
                            Pomóż chłopakom bronić Europę przed wojną!
                            Każdego dnia oni potrzebują jedzenia, wody i sprzętu! Nasi drodzy bracia z 92 brygady serdecznie proszą nasz Międzynarodowy Fundusz Pomocy Społecznej o stworzenie zgromadzenia pomocy!<br/>
                            Odpowiedzieliśmy i pomogliśmy im stworzyć silną tarczę chroniącą wolność wszystkich cywilizowanych ludzi!<br/>
                            Wojownicy potrzebują: <br/>
                            1) 3 pickupy do misji bojowych <br/>
                            2) 5 dronów Mark 3 do misji bojowych <br/>
                            3) Pomoc humanitarna (żywność, produkty higieniczne, artykuły medyczne)<br/>
                            Nasza fundacja zobowiązuje się przekazać wszystko, co niezbędne w Ukrainę! <br/>
                            Proszę nie bądź obojętny!<br/>
                            Przekaż darowiznę i rozpowszechnij projekt. To niesamowite, jak 1 złotówka może wpłynąć na to, co dzieje się na świecie! <br/>
                            </MDBTypography>
                                    </Card.Text>
                                    <div className="text-center">
                                    <Button href="/infoq2" variant="outline-dark" type="submit">Przejdź do projektu</Button>
                                    </div>
                            </Card.Body>
                    </div>
                    <h1><br/></h1>
                    <div className="mx-5 d-block">
                            <Card.Img variant="top" src={qq6} alt="..." class="img-fluid mx-auto d-block m-2"/> 
                                <Card.Body>
                                <CardHeader><h2 className="title text-center m-4">Centrum społeczne społeczności polsko-ukraińskiej</h2></CardHeader>
                                    <Card.Text>
                                    <MDBTypography tag='small'>
                                    Centrum społeczne społeczności polsko-ukraińskiej

                                    Międzynarodowy projekt społeczny „Socjalne Centrum polsko-ukraińskiej współpracy” jest społecznie ukierunkowanym ośrodkiem przyjmowania uchodźców z Ukrainy, zapewniania im mieszkania i dalszego zatrudnienia.

                                    Cele projektu:<br/>
                                        1. Projekt powstał w celu wzmocnienia relacji polsko-ukraińskich na poziomie międzynarodowym i krajowym.<br/>
                                        2. Projekt ma na celu określenie pomocy strony polskiej w rozwiązywaniu problemów Ukrainy oraz wezwanie społeczności światowej do dalszego wspierania Polski w ramach wzmocnienia wartości demokratycznych cywilizowanego świata.<br/>
                                        3. Umieszczenie uchodźców ukraińskich w celu tworzenia mieszkań samo utrwalających się, tworzenia miejsc pracy w ramach przedsiębiorczości społecznej i zatrudnienia na lokalnym rynku pracy.<br/>
                                        4. Integracja społeczna i kulturowa Ukraińców ze społeczeństwem polskim poprzez zorganizowaną działalność edukacyjną, a także tworzenie kilku przedsiębiorstw o ​​charakterze społecznym, opartych na centrum, takich jak kuchnia ukraińska, sklep z pamiątkami, siłownia, salon kosmetyczny, kursy języka polskiego itp. . dla dalszego zatrudnienia Ukraińców.<br/>
                                        5. Odciążenie budżetu Polski. Według różnych ośrodków analitycznych liczba Ukraińców w Polsce przekroczyła granicę trzech milionów. Dzięki stworzeniu takich projektów możliwe będzie przezwyciężenie problemów z obciążeniem polskiego budżetu, a także przyciągnięcie dodatkowych inwestycji do polskiego budżetu na poziomie międzynarodowym.<br/>
                                        6. Zaangażowanie międzynarodowych organizacji w celu współpracy i zacieśniania stosunków między Polską a Unią Europejską, Ameryką, Kanadą.<br/>
                                        7. Przeniesienie polskiej przedsiębiorczości społecznej na poziom międzynarodowy w ramach tworzenia większej liczby takich projektów zarówno w kraju, jak i za granicą.<br/>
                                        8. Bezpośrednie poparcie dla jasnej i silnej polityki państwa polskiego i podążania ścieżką polityczną.<br/>

            Aktualizacja projektu: 25 lat. Integracja uchodźców jest jednym z kluczowych zadań publicznych Polski w najbliższej przyszłości.
            Ośrodek planuje pomieścić 100 osób.
            W zależności od zebranych funduszy projekt jest w stanie przyjąć większą liczbę migrantów z Ukrainy.
            Orientacyjna kalkulacja kwoty dla całego projektu: od 1 000 000 zł do 4 000 000 zł w zależności od skalowalności projektu.<br/>

            Priorytety tworzenia ośrodków społecznych:<br/>

                - Centrum społeczne ma za zadanie łatwo i w jak najkrótszym czasie usystematyzować przepływ osób ze strony ukraińskiej i zintegrować ich ze społeczeństwem polskim.<br/>

                - Dzięki mediom i portalom społecznościowym miliony ludzi w różnych krajach zostaną poinformowane o powstaniu międzynarodowego projektu w Polsce, dzięki któremu otrzymamy silne wsparcie z całego cywilizowanego świata.<br/>

                - Na bazie centrum socjalnego stworzymy również punkt pomocy humanitarnej, punkt informacyjny i coworking dla potrzebujących.<br/>

                -W ramach projektu planowane jest przeprowadzenie akcji humanitarnych i charytatywnych w celu zebrania funduszy, obsługi i nagłośnienia projektu na poziomie lokalnym i międzynarodowym.<br/>

                - Praktyka projektu zorientowanego społecznie to najlepszy sposób na zmobilizowanie społeczeństwa do rozwiązywania problemów społecznych zarówno w Polsce, jak iw całym cywilizowanym świecie. Dzięki nowoczesnym narzędziom przyciągnięcie inwestycji w taki projekt jest proste i szybkie w obecnej sytuacji na świecie.<br/>

                - Polityczny kurs państwa polskiego towarzyszy celom i założeniom takiego projektu. Zmniejszenie obciążeń podatkowych i ochrona ubogich to kluczowe cele, które projekt jest w stanie osiągnąć. Nastawienie na rezultaty, czyli wzmocnienie polskich wartości poprzez realizację projektu, to kolejny krok w rozwoju Polski.<br/>
                                    </MDBTypography>
                                    </Card.Text>
                                    <div className="text-center">
                                    <Button href="/infoq6" variant="outline-dark" type="submit">Przejdź do projektu</Button>
                                    </div>
                            </Card.Body>
                    </div>         
                <br/>
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
            <div className="Footer">
                <Footer/>
            </div>
        </div>
        </>
        )
    }
}