import React, { useState } from "react";
import "../styles/about.css";

import logoBan from "../assets/images/logobalinesia-valid.png";
import travels from "../assets/images/travel-1.png";
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
      {/* ==== start accordion */}
      {/* non aktif 
      <section>
        <Container>
          <UncontrolledAccordion>
            <AccordionItem>
              <AccordionHeader targetId="1">Tujuan Balinesia</AccordionHeader>
              <AccordionBody accordionId="1">
                Proyek <strong>"Balinesia"</strong> adalah platform website
                inovatif yang menyediakan rekomendasi pariwisata dan perjalanan
                sejarah lokal di Bali. Tujuan utama proyek ini adalah
                mempermudah perencanaan perjalanan bagi wisatawan yang
                berkunjung ke Bali dengan menyediakan informasi yang akurat dan
                komprehensif. Melalui integrasi teknologi informasi terkini,{" "}
                <strong>"Balinesia"</strong> akan memberikan informasi
                terperinci tentang atraksi wisata, tempat sejarah lokal, dan
                pengalaman unik di Bali. Proyek ini juga bertujuan memberikan
                kontribusi positif bagi industri pariwisata Indonesia, khususnya
                Bali, dengan memanfaatkan keahlian dan kemampuan dalam bidang
                teknologi informasi.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Cakupan & Hasil Balinesia
              </AccordionHeader>
              <AccordionBody accordionId="2">
                Platform ini akan membantu wisatawan mencari informasi akurat
                dan komprehensif tentang destinasi wisata di Bali, serta
                memudahkan perencanaan perjalanan. Beberapa hasil kerja utama
                proyek ini meliputi:
                <ol>
                  <li>
                    Membangun website pariwisata di Bali dengan fokus pada
                    akurasi dan kelengkapan informasi, yang akan membantu
                    mengatasi kesulitan wisatawan dalam mencari informasi akurat
                    setelah pembukaan pariwisata pasca-COVID-19.
                  </li>
                  <li>
                    Pengembangan website yang menyajikan informasi lengkap
                    tentang tempat wisata, memudahkan perencanaan perjalanan,
                    dan memastikan informasi akurat.
                  </li>
                  <li>
                    Kontribusi positif bagi pariwisata Indonesia, khususnya
                    Bali, melalui pemanfaatan teknologi informasi, yang
                    diharapkan akan membantu memulihkan pariwisata Bali dan
                    meningkatkan daya saing destinasi pariwisata Indonesia
                    secara keseluruhan.
                  </li>
                </ol>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Jadwal Pengerjaan</AccordionHeader>
              <AccordionBody accordionId="3">
                Jadwal Pengerjaan Project:
                <ol>
                  <li>
                    <strong>Minggu I (6 Nov 2023):</strong> Perencanaan dan
                    Persiapan (Pengumpulan Project Plan) oleh semua anggota tim
                  </li>
                  <li>
                    <strong>Minggu II (13 Nov 2023):</strong> Desain dan
                    Pengembangan Prototipe oleh semua anggota tim
                  </li>
                  <li>
                    <strong>Minggu III (20 Nov 2023):</strong> Implementasi
                    Fitur Utama oleh semua anggota tim
                  </li>
                  <li>
                    <strong>Minggu IV (27 Nov 2023):</strong> Uji dan Perbaikan
                    oleh semua anggota tim
                  </li>
                  <li>
                    <strong>Minggu V (4 Desember 2023):</strong> Uji dan
                    Perbaikan oleh semua anggota tim
                  </li>
                  <li>
                    <strong>Minggu VI (11 Desember 2023):</strong> Peluncuran
                    dan Evaluasi Awal oleh semua anggota tim
                  </li>
                </ol>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">Sumber Daya Proyek</AccordionHeader>
              <AccordionBody accordionId="4">
                Sumber daya atau resource yang diperlukan dalam pengerjaan
                proyek: Bahasa Pemrograman, Framework Node JS, React JS,
                ReactStrap, MongoDB, JWT, ExperssJS, API, cloud backend,
                dataset, paper/journals/articles, serta sumber daya lainnya yang
                diperlukan.
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </Container>
      </section>
      non aktif */}
    </>
  );
};

export default About;
