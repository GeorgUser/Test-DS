import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logoFooter from "../images/express.svg";
import DMCA from "../images/DMCA.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <div className="copyright">
                            <img src={logoFooter} className="footer-logo" alt="logo"/>
                            <p>All Rights Reserved to info.com</p>
                            <p>© DDD – Web Marketing</p>
                            <p>Privacy Policy</p>
                            <img src={DMCA} className="dmca-logo" alt="logo"/>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" lg="4">
                        <div className="footer__phones">
                            <p className="footer__title">CONTACT US</p>
                            <div className="country">
                                <p className="country__name">UK</p>
                                <div className="country__number">
                                    <a href="tel:+44-2020202020">+44-2020202020</a>
                                    <a href="tel:+44-2020202020">+44-2020202020</a>
                                </div>
                            </div>
                            <div className="country">
                                <p className="country__name">AUT</p>
                                <div className="country__number">
                                    <a href="tel:+44-2020202020">+44-2020202020</a>
                                </div>
                            </div>
                            <div className="country">
                                <p className="country__name">AUS</p>
                                <div className="country__number">
                                    <a href="tel:+44-2020202020">+44-2020202020</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" lg="5">
                        <div className="footer__office-info">
                            <Row>
                                <Col xs="12" sm="4" lg="7">
                                    <div className="footer__office-info__item">
                                        <p className="footer__title">ADDRESS</p>
                                        <p>Lorem ipsum <br/>
                                            set amet</p>
                                    </div>
                                </Col>
                                <Col xs="12" sm="3" lg="5">
                                    <div className="footer__office-info__item end-line">
                                        <p className="footer__title">Email US</p>
                                        <a href="mailto:info@info.com">info@info.com</a>
                                    </div>
                                </Col>
                                <Col xs="12" sm="5" lg="12">
                                    <div className="footer__office-info__item">
                                        <p className="footer__title">OUR OFFICE HOURS</p>
                                        <p>Mon-Fr: 8:00-18:00 GMT <br/>
                                        Sat/Su: Closed</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;