import React from "react";
import "../styles/home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.jpg";
import heroImg02 from "../assets/images/gallery-03.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import featuredImg from "../assets/images/ourfeatured.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* ========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="7" >
              <div className="hero__content">
                <h1>
                  Menghadirkan Petualangan Luar Biasa
                  <span className="highlight"> Melalui Perjalanan</span>
                </h1>
                <p>
                Temukan keindahan dunia, jelajahi budaya baru, dan rasakan kegembiraan dalam setiap langkah.
                </p>
              </div>
            </Col>

            <Col lg="5">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            
            {/* <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col> */}

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========== hero section start =========== */}

      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="featured__tour-title">Tour Unggulan</h2>
              <p className="featured__tour-content">Dari kota bersejarah hingga pemandangan alam yang spektakuler.</p>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h2>
                  Mengapa Anda Harus Memilih Kami
                </h2>
                <p>
                  Kami adalah pintu gerbang menuju petualangan yang tidak terlupakan, menyuguhkan tips lokal, rencana perjalanan yang disesuaikan, dan kemudahan pemesanan.
                </p>
              </div>

              <div className="counter__wrapper align-items-center gap-6 ">
                <div className="counter__box">
                  <div className="icons">
                    <MdOutlineHealthAndSafety size={50} style={{ color: '#5FBDFF' }} />
                  </div>
                  <div className="counter_text">
                    <h1>Keamanan</h1>
                    <p>Prioritas utama kami adalah keselamatan dan kesejahteraan klien kami.</p>
                  </div>
                </div>

                <div className="counter__box">
                  <div className="icons">
                  <MdPayment size={50} style={{ color: '#5FBDFF' }} />
                  </div>
                  <div className="counter_text">
                    <h1>Pembayaran Mudah</h1>
                    <p>Keamanan transaksi, dan kecepatan proses pembayaran.</p>
                  </div>
                </div>

                <div className="counter__box">
                  <div className="icons">
                  <BsFillPeopleFill size={50} style={{ color: '#5FBDFF' }} />
                  </div>
                  <div className="counter_text">
                    <h1>Kemudahan Pengguna</h1>
                    <p>Panduan yang lengkap dan memudahkan pengguna dalam menggunakan website.</p>
                  </div>
                </div>
                

                
      
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={featuredImg} alt="Featured img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="testimonial__title">Testimoni Pelanggan</h2>
              <p className="testimonial__text">Terima kasih atas dukungan anda dalam menggunakan layanan kami. Kami senang bisa membantu anda dalam mencapai tujuan anda.</p>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
