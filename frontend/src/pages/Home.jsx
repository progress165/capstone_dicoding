import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.jpg'

import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {

    return (<>
        {/* ==hero section start === */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <h1>Temukan<span className='highlight'> Perjalanan Anda</span></h1>
                            <p>Memulai perjalanan untuk menjelajahi destinasi unik dan menciptakan kenangan yang abadi.</p>
                        </div>
                    </Col>
 
                    <Col lg='6'>
                        <div className='hero__img-box'>
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/* ==hero section end === */}

        {/* ==featured tour section start === */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2 className='featured__tour-title'>Wisata Unggulan</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>

        {/* ==featured tour section end === */}
       
        {/* ==Gallery section start === */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h2 className='gallery__title'>Galeri Wisata Pelanggan</h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>


        {/* ==gallery section end === */}

        {/* ==testimonial section start === */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h2 className='testimonial__title'>Testimoni Pelanggan</h2>
                    </Col>
                    <Col>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ==testimonial section end === */}
        <Newsletter/>
    </>)

};

export default Home;