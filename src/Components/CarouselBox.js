import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

//Assets
import m1 from "../Assets/m1.png";
import m2 from "../Assets/m2.png";
import m4 from "../Assets/m4.png";
import m5 from "../Assets/m5.png";
import m6 from "../Assets/m6.png";

export default class Home extends Component{
    render(){
        return(
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={m1}
                        alt="m1"
                        />
                    <Carousel.Caption>
                        <h4>  </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={m2}
                        alt="m2"
                        />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={m4}
                        alt="m4"
                        />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={m5}
                        alt="m5"
                        />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={m6}
                        alt="m6"
                        />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                </Carousel>
        )
    }
}