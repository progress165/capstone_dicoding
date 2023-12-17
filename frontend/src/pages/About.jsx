import React, { useState } from "react";
import "../styles/about.css";

import logoBan from "../assets/images/logobalinesiaa.png";
import travels from "../assets/images/travel-1.jpg";
import CostumTag from "../components/CostumTag/CostumTag";
import Search from "../components/Search/Search";

import {
  Container,
  Row,
  Col,
  // AccordionBody,
  // AccordionHeader,
  // AccordionItem,
  // UncontrolledAccordion,
} from "reactstrap";

const About = () => {
  const [open, setOpen] = useState("1");
  // eslint-disable-next-line no-unused-vars
  const defaultOpen = (defaultOpen) => {
    if (open === defaultOpen) {
      setOpen();
    } else {
      setOpen(defaultOpen);
    }
  };

  return (
    <>
      <section>
        <Container>
          <CostumTag />
        </Container>
      </section>
      <section>
        <Container fluid="sm md lg xl fluid">
          <Row>
            <Col className="bg-white rounded-lg" md={7} sm={12}>
              <b>"Balinesia"</b> adalah sebuah proyek yang bertujuan untuk
              menciptakan platform website inovatif yang memberikan rekomendasi
              akurat dan komprehensif untuk pariwisata lokal dan perjalanan
              sejarah di Bali. Tujuan utama proyek ini adalah memberikan
              kontribusi positif bagi industri pariwisata Indonesia, khususnya
              di Bali, dengan memanfaatkan keahlian dalam teknologi informasi.
              Platform ini akan mengintegrasikan teknologi informasi terkini
              untuk memberikan informasi terperinci tentang atraksi wisata,
              tempat sejarah lokal, dan pengalaman unik di Bali. Tujuannya
              adalah menjadi mitra yang dapat diandalkan bagi wisatawan dalam
              merencanakan dan mengatur perjalanan dengan lebih efisien. Melalui
              integrasi teknologi informasi terkini, "Balinesia" akan
              menyediakan informasi terperinci tentang atraksi wisata, tempat
              sejarah lokal, dan pengalaman unik di Bali. Dengan demikian,
              diharapkan platform ini dapat menjadi sumber daya utama bagi para
              pelancong yang ingin menjelajahi keindahan dan warisan kaya budaya
              yang dimiliki oleh pulau Bali.
            </Col>
            <Col className="pt-5" md={5} sm={12}>
              <img src={logoBan} alt="logo" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==== start section akomodasi*/}
      <section className="relative py-20 text-center">
        {/* Kode yang sudah ada untuk bagian Layanan */}
        <Container>
          <Row className="items-center flex flex-wrap">
            <Col md="7" className="ml-auto mr-auto">
              <img
                alt="..."
                className="max-w-full rounded-lg list-none pt-5"
                src={travels}
                style={{ maxWidth: "75%" }}
              />
            </Col>
            <Col md="5" className="ml-auto mr-auto">
              <div className="md:pl-12">
                <h3 className="text-3xl font-semibold pt-5 mt-3">
                  <b>Layanan</b>
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Fitur-fitur <b>Balinesia</b> yang akan membantu Anda menemukan
                  liburan dan perjalanan terbaik sepanjang hidup Anda.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-700">Akomodasi</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-semibold">Wisata</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-700 font-semibold">Kuliner</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==== end section akomodasi*/}
      {/* ==== start section founders */}
      <section>
        <Container>
          <Search />
        </Container>
      </section>
      {/* ==== end section founders */}
     
    </>
  );
};

export default About;
