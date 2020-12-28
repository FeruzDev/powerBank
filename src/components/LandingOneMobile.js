import React, {Component} from 'react';
import Example from "./Example";
import {Button, Col, Container, Row} from "reactstrap";

class LandingOneMobile extends Component {
    render() {
        return (
            <div className="LandingOneMobile">
                <div className="PairOne">
                    {/*<Example></Example>*/}

                    <Container fluid={true}>
                        <Row>
                            <Col md={7}>
                                <h1>Почасовая <br/> аренда <span>Power Bank</span></h1>
                                {/*<p>Арендуй power bank для зарядки своего смартфона на станции Yoou Share*/}
                                {/*    и сохраняй мобильность. Верни в любую*/}
                                {/*    из 400 точек по всем Ташкенте!</p>*/}
                            </Col>
                            <Col md={5}>
                                <div className="rightImg">
                                    <img src="./photos/Group 122 (1).svg" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="PairTwo">
                    <h1>Yoou Share </h1>
                    <Container fluid={true}>
                        <Row>
                            <Col md={4}>
                                <p>это возможность оставаться
                                    на связи 24 часа в сутки!</p>
                            </Col>
                            <Col md={8}>
                                <div className="rightRec">
                                    <h2>
                                        <span>Первые</span><span>5</span><span> минут свободно Сутки </span>
                                        <span>
                                            <img src="./photos/Exclude.svg" alt=""/> 99</span>
                                    </h2>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className="threeItems">

                                    <div className="itemsBack">
                                        <img src="./photos/Frame (7).svg" alt=""/>
                                    </div>
                                    <h2>24/7</h2>
                                    <p>Техподдержка
                                        пользователей</p>
                                    <div className="line"></div>

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="threeItems">
                                    <div className="itemsBack">
                                        <img src="./photos/Frame (8).svg" alt=""/>
                                    </div>
                                    <h2>400</h2>
                                    <p>Cтанций Yoou Share
                                        в Ташкенте</p>
                                    <div className="line"></div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="threeItems">
                                    <div className="itemsBack">
                                        <img src="./photos/Frame (9).svg" alt=""/>
                                    </div>
                                    <h2>40</h2>
                                    <p>Стоимость часа аренды</p>
                                    <div className="line"></div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>





                <div className="PairThree">
                    <Container fluid={true}>
                        <Row>
                            <h1 className="pairThreeTitle">Power Bank <span>Yoou Share</span></h1>
                            <Col md={4}>
                                <div className="leftImg">
                                    <img src="./photos/Group 123.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>


                                <p>Подходит для всех современных мобильных устройств</p>
                                <p>Ёмкости аккумулятора хватает на полную зарядку двух телефонов</p>
                                <h1 className="pairThreeTitle2">Характерис тики <br/> <span>power bank</span></h1>
                                <p>Емкость: 5000 mAh
                                    Разъемы: Apple, Android
                                    Размер: 180х85х15 мм
                                    Вес: 0,2 кг </p>
                                <span><img src="./photos/Union.svg" alt=""/></span>
                            </Col>
                        </Row>
                    </Container>
                </div>



                <div className="PairFour">
                    <Container fluid={true}>
                        <Row>

                            <h1 className="pairFourTitle">Скачай мобильное</h1>
                            <h1 className="pairFourTitle2">приложение <span>Yoou Share</span> на смартфон</h1>

                            <Col md={4}>

                                <div className="leftImg">
                                    <img src="./photos/Group 124.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>


                                <p>Приложение поддерживается всеми мобильными устройствами. Это даст возможность в
                                    полном объеме пользоваться нашим сервисом и получать техническую поддержку в любое
                                    удобное для тебя время.</p>


                                <div className="app">
                                    <a href="#!">
                                        <img src="./photos/Frame (6).svg" alt=""/>
                                    </a>
                                    <a href="#!">
                                        <img src="./photos/Group 65.svg" alt=""/>
                                    </a>

                                </div>
                                <span className="union"><img src="./photos/union.svg" alt=""/></span>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className="PairFive">
                    <Container fluid={true}>
                        <Row>
                            <h1 className="pairFiveTitle">Найди ближайшую </h1>
                            <h1 className="pairFiveTitle2">станцию <span>Yoou Share</span> на карте</h1>
                            <Col md={4}>
                                <div className="leftImg">
                                    <img src="./photos/Group 125.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>


                                <p>Более 400 станций Yoou Share и 840 power bank в вашем распоряжении. Взять и вернуть
                                    зарядку Вы можете в любое удобное время! Аккумуляторы уже оснащены всеми типами
                                    разъемов — Apple, micro USB и type-C

                                </p>

                                <span><img src="./photos/Union.svg" alt=""/></span>
                            </Col>
                        </Row>
                    </Container>
                </div>



                <div className="PairSex">
                    <Container fluid={true}>
                        <Row>

                            <h1 className="pairSexTitle">Отсканируй QR-код</h1>
                            <h1 className="pairSexTitle2">на лицевой панели станции</h1>

                            <Col md={4}>
                                <div className="leftImg">
                                    <img src="./photos/Group 136.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>



                                <p>QR код расположен на лицевой панели каждой станции. Просто откройте мобильное
                                    приложение и наведите камеру для сканирования. Вы услышите «ЩЕЛК»
                                    и Powerbank ваш. Ура! Теперь аккумулятор вашего телефона в безопасности.</p>


                                <span className="union"><img src="./photos/union.svg" alt=""/></span>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="PairSeven">
                    <Container fluid={true}>
                        <Row>
                            <h1 className="pairSevenTitle">Заряжай свой девайс</h1>
                            <Col md={4}>
                                <div className="leftImg">
                                    <img src="./photos/Group 126.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>


                                <p>Ёмкости аккумулятора хватит на полную зарядку двух телефонов. Одновременно можно
                                    заряжать 2 девайса с разными разъёмами! При первом использовании BattBox необходимо
                                    привязать
                                    банковскую карту.</p>
                                <p>Power bank нужно вернуть в течение 5-ти дней, иначе сервис спишет штраф с вашей карты
                                    :(

                                </p>
                                <span><img src="./photos/Union.svg" alt=""/></span>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="PairEight">
                    <Container fluid={true}>
                        <Row>
                            <h1 className="pairEightTitle">Верни зарядку</h1>
                            <h1 className="pairEightTitle2">в любую станцию</h1>

                            <Col md={4}>
                                <div className="leftImg">
                                    <img src="./photos/Group 127.svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>



                                <p>Для возврата power bank, откройте мобильное приложение и найдите на карте ближайшую к
                                    вам станцию. Вставьте аккумулятор в любой свободный слот до щелчка. На этом аренда
                                    закончится и мы пришлем вам чек..</p>


                                <span className="union"><img src="./photos/union.svg" alt=""/></span>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className="footer">
                    <Container fluid={true}>
                        <Row>
                            <Col md={2}>
                                <div className="footerLogoImg">
                                    <img src="./photos/Group (1).svg" alt=""/>
                                </div>
                            </Col>
                            <Col md={5}>
                                <p>Компания Yoou Share представляет услугу «Yoou Share» - почасовая аренда павербанка в Ташкенте</p>

                            </Col>
                            <Col md={5}>
                                <div className="app">
                                    <a href="#!">
                                        <img src="./photos/Frame (6).svg" alt=""/>
                                    </a>
                                    <a href="#!">
                                        <img src="./photos/Group 65.svg" alt=""/>
                                    </a>

                                </div>
                                <Button  color="success">Заказать звонок</Button>
                                <p>
                                    © 2018 BattBox. All rights reserved
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default LandingOneMobile;