import React, { Component } from "react";
import { MDBTypography } from 'mdb-react-ui-kit';
import { Card, Row, Col } from 'react-bootstrap';

//assets
import m3 from "../Assets/m3.png"


//Components
import Footer from "../Components/Footer";

export default class Info extends Component{
    render(){
        return(
            <>
            <div className="yellow">
            <div className="jumbotron jumbotron-fluid">
                <img 
                    style={{width: "100%"}}
                    className="text-center"
                    src={m3}
                    alt="m3"
                    />
            </div>
            <div className="mx-5 d-block m-3">
                            <Card.Body>
                                <Card.Header><h2 className="title text-center m-4">Czym my zajmujemy się</h2></Card.Header>
                                    <Card.Text>
                                    <MDBTypography tag='medium'>
                                    Międzynarodowa Fundacja Pomocy Społecznej.<br/>
                                    Nasz zespół realizuje szereg międzynarodowych projektów, aby pomóc Ukrainie we współczesnych, nowoczesnych realiach. Łączymy rozwiązania społeczne, kulturalne i charytatywne na poziomie międzynarodowym i lokalnym w zakresie wolontariatu, wsparcia odbudowy Ukrainy, międzynarodowych programów szkolenia społecznego i organizacji ludzi (grupy wolontariackie, organizacje pozarządowe i pozarządowe) na rzecz dalszego rozwoju Ukrainy w dzisiejszych realiach.<br/>
                                    W tej chwili tworzymy tarczę, która przez wiele lat może chronić Ukrainę i obywateli Europy, realizując inicjatywy społeczne na poziomie międzynarodowym i lokalnym.<br/>
                                    W chwili obecnej nie ma uniwersalnego rozwiązania problemów społecznych na żadnym poziomie.<br/>
                                    Nasz zespół podjął się tego zadania i konsekwentnie je realizuje.<br/>
                                    Wdrażamy rozwiązania społeczne:<br/>
                                    1) Odbudowa Ukrainy na różnych szczeblach lokalnych<br/>
                                    2) Wsparcie słabszych grup ludności (niepełnosprawni, emeryci, emeryci, dzieci itp.)<br/>
                                    3) Odbudowa i wsparcie infrastruktury Ukrainy w skali ogólnokrajowej<br/>
                                    4) Wsparcie Sił Zbrojnych i Przemysłu Wojskowego na poziomie organizacji ochotniczych, grup inicjatywnych i innych formacji na terenie Ukrainy.<br/>
                                    5) Realizacja pomocy humanitarnej dla Sił Zbrojnych i zagrożonych grup ludności”<br/>
                                    6) Organizacja grup wolontariuszy, szkolenia i wsparcie realizacji projektów na terenie Ukrainy<br/>
                                    7) Międzynarodowa organizacja pracy darczyńców, fundacji, organizacji pozarządowych, organizacji pozarządowych, organizacji pozarządowych na poziomie ochrony i wsparcia Ukrainy w różnych lokalnych i międzynarodowych sektorach społecznych.<br/>
                                    8) Wdrażanie przedsiębiorczości społecznej na terytorium Ukrainy i poza jej granicami w ramach wolontariatu i pomocy społecznej dla różnych grup ludności oraz na rzecz jednoczenia społeczności.<br/>
                                    9) Realizacja współpracy z międzynarodowymi i ukraińskimi wydziałami infrastruktury i biznesu w ramach pomocy społecznej.<br/>
                                    10) Organizacja spotkań i realizacja relacji partnerskich z liderami lokalnymi, przedstawicielami władz Ukrainy i liderami organizacji (Wolontariat, Fundacje, NDO, NCO, NPO itp.) na rzecz dalszego rozwoju państwa ukraińskiego.<br/>
                                    Międzynarodowa Fundacja Pomocy Społecznej jest tarczą dla Ukrainy i Europy przed rosyjską agresją i odpowiedzialnie, szybko i gotowi do współpracy ze wszystkimi zainteresowanymi organizacjami i obywatelami cywilizowanego świata podchodzi do realizacji projektów społecznych.<br/>
                                    </MDBTypography>
                                    </Card.Text>
                            </Card.Body>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
            </div>
            </>

            )
        }
    }