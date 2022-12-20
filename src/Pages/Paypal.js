import React, { Component } from "react";
import { Container, Button, Form, Card, Row, Col, CardGroup, Nav, ListGroup, NavLink, CardImg, TabContent, Tab, TabPane } from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

//Assets
import paypal from "../Assets/paypal.png";
import logo from  "../Assets/log1.png";
import visa from "../Assets/visa.png";
import ws from "../Assets/western.png";

//Components
import Footer from "../Components/Footer";

export default class Kontakt extends Component{
    render(){
        return(
            <>
              <div className="yellow">
                <Row>
                    <Tab.Container id="ledt-tab" defaultActiveKey="a">
              <Col sm={5}>
    <Card style={{marginTop: "70px"}}>

      <Card.Header>
            <h4>Sposoby płatności</h4>
      </Card.Header>
      <ListGroup variant="flush">

        <Nav.Link data-toggle="tab" eventKey="a">
            <ListGroup.Item className="htap">Visa</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="b">
            <ListGroup.Item className="htap">MasterCard</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="c">
            <ListGroup.Item className="htap">Western Union</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="d">
            <ListGroup.Item className="htap">Millenium</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="e">
            <ListGroup.Item className="htap">Bank Polski "PKO</ListGroup.Item>
        </Nav.Link>

        <NavLink data-toggle="tab" eventKey="f">
            <ListGroup.Item className="htap">Приват Банк</ListGroup.Item>
        </NavLink>

        </ListGroup>
    </Card>
    </Col>

    <Col sm={7} style={{marginTop: "5rem"}}>
        <TabContent>
            <TabPane eventKey="a">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">PayPal</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer&state=%2F">Przejdź do oplaty</Button>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="b">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">MasterCard</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Przejdź do oplaty</Button> <p>*teraz opłata nie działa</p>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="c">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Western Union</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Przejdź do oplaty</Button> <p>*teraz opłata nie działa</p>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="d">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Millenium</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Przejdź do oplaty</Button> <p>*teraz opłata nie działa</p>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="e">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Bank Polski</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Przejdź do oplaty</Button> <p>*teraz opłata nie działa</p>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="f">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Приват Банк</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Informacja</h5>
                                        <h5>Witalis Dobush</h5>
                                                                    <p>
                                                                               Tel.: +48788902534<br/>
                                                                               E-mail: mfps.inform@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Przejdź do oplaty</Button> <p>*на данний момент оплата не працює</p>
                                </Card>
                                </TabPane>
                    </TabContent>             
    </Col>
    </Tab.Container>
    </Row>
    <br/>
    <br/>
    <br/>
              </div>
              <div className="Footer">
                <Footer/>
            </div>
            </>
        )
    }
  }