import React from 'react';
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (<section className='newsletter'>
        <Container>
            <Row>
                <Col>
                    <div className="newsletter__content">
                        <h1>Tunggu Apa Lagi?</h1>
                        <p>Berlangganan sekarang untuk mendapatkan informasi perjalanan lebih detail.</p>
                        <button className='btn newsletter__btn'>Daftar Akun</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>)

};

export default Newsletter;