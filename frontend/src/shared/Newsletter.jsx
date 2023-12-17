import React from "react";
import "./newsletter.css";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col>
                    <div className="newsletter__content">
                        <h1>Tunggu Apa Lagi?</h1>
                        <p>Berlangganan sekarang untuk mendapatkan informasi perjalanan lebih detail.</p>
                        <Link to={'/register'}>
                            <button className='btn newsletter__btn'>Daftar Akun</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Newsletter;
