import React, {Component} from 'react';
// import Example from "./Example";
import {Col, Container, Row} from "reactstrap";

class SectionOneMobile extends Component {
    render() {
        return (
            <div className="SectionOneMobile">
                <div className="firstSec">
                    {/*<Example></Example>*/}
                    <h1 className="mainTitle">Бесплатные зарядки для <br/>
                        молодежи уже в <span>Ташкенте</span></h1>
                    {/*<p className="mainTitleAdditional">Наш сервис уже стал привычкой для тысяч горожан.*/}
                    {/*    В основном это прогрессивные и активные люди привыкшие к регулярным и спонтанным тратам. Не*/}
                    {/*    упустите*/}
                    {/*    шанс сделать их своими клиентами!</p>*/}
                </div>

                <Container className="middleWeast" fluid={true}>
                    <Row>
                        <Col md={4}>
                            <div className="halfImages">
                                <img src="./photos/Rectangle 180.svg" alt=""/>
                            </div>

                        </Col>


                        <Col md={4}>
                            <div className="halfImages">
                                <img src="./photos/Rectangle 177.svg" alt=""/>

                            </div>
                        </Col>



                        <Col md={4}>
                            <div className="images">
                                <img src="./photos/Rectangle 178.svg" alt=""/>

                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="halfImages">
                                <img src="./photos/Rectangle 179.svg" alt=""/>

                            </div>

                        </Col>

                        <Col md={4}>
                            <div className="halfImages">
                                <img src="./photos/Group 121.svg" alt=""/>

                            </div>
                        </Col>

                    </Row>
                </Container>

                <div className="mainTitleBottom">
                    <h1>
                        Мы <br/> предлагаем три
                        варианта
                        <span> Станций</span>
                        {/*<span>Станции</span>*/}


                    </h1>
                </div>
                <div className="mainStations">
                    <Container fluid={true}>
                        <Row>
                            <Col md={4}>
                                <div className="stations">
                                    <div className="stationsImg">
                                        <img src="./photos/Group 138.svg" alt=""/>
                                    </div>

                                    <div className="imgStationTitle">
                                        <p> 12 слотов для сканирования кода Рекламная зарядная станция Power Bank</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="stations">
                                    <div className="stationsImg">
                                        <img src="./photos/Group 129.svg" alt=""/>
                                    </div>

                                    <div className="imgStationTitle">
                                        <p> Проводная зарядная станция Power Bank
                                            с 6 разъемами</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="stations">
                                    <div className="stationsImg">
                                        <img src="./photos/Group 130.svg" alt=""/>
                                    </div>
                                    <div className="imgStationTitle">
                                        <p> Блок питания для демонстрации экрана на 24 слота</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    {/*<div className="stationsTitleBottom">*/}
                    {/*    <h1>*/}
                    {/*        Три варианта*/}
                    {/*        <img  src="./photos/Union.svg" alt=""/>*/}
                    {/*    </h1>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default SectionOneMobile;