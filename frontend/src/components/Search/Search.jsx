import React from "react";
import "./search.css";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

import users01 from "../../assets/images/user-arya.png";
import users02 from "../../assets/images/user-rifqi.png";
import users03 from "../../assets/images/user-toriq.png";
import users04 from "../../assets/images/user-okta.png";
import users05 from "../../assets/images/user-chris.png";

const Search = () => {
  return (
    <section className="pt-20 pb-48 text-center">
      <Container>
        <Row className="justify-content-center text-center mb-24">
          <Col lg="6">
            <h2 className="text-4xl font-semibold">
              <b>Para Pendiri</b>
            </h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Orang-orang terkemuka yang menciptakan dan mengembangkan{" "}
              <b>Balinesia</b> dari awal hingga sekarang
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          {pendiri.map((orang, index) => (
            <Col key={index} md="6" lg="4" className="mb-12 p-3">
              <Card className="mx-auto text-center">
                <CardBody className="text-center">
                  <img
                    src={orang.photo}
                    alt="..."
                    className="card-img-top card_image"
                    style={{ maxWidth: "170px" }}
                  />
                  <CardTitle tag="h5" className="text-xl font-bold name_card">
                    {orang.nama}
                  </CardTitle>
                  <CardText className="position_card">
                    {orang.posisi}
                  </CardText>
                  <CardText className="text-sm text-gray-300 uppercase font-semibold minat_card">
                    {orang.minat}
                  </CardText>
                  <div className="sosial_media">
                    {orang.mediaSosial.map((media, i) => (
                      <Button
                        key={i}
                        color={media.warna}
                        className="rounded-circle mr-2 mb-1 me-2 mt-1"
                        href={`https://github.com/${orang.githubUsername}`}
                        target="_blank"
                      >
                        {media.icon}
                      </Button>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// Data sampel untuk para pendiri
const pendiri = [
  {
    nama: "Ahmad Attoriq",
    posisi: "F-08",
    minat: "Front-End Developer",
    photo: users03,
    githubUsername: "ahmads99",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "Arya Haekal",
    posisi: "F-13",
    minat: "Front-End Developer",
    photo: users01,
    githubUsername: "aryaaa40",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "M. Rifqi Fauzi",
    posisi: "F-06",
    minat: "Front-End Developer",
    photo: users02,
    githubUsername: "rifqifauzi24",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "Christian Frans",
    posisi: "F-08",
    minat: "Back-End Developer",
    photo: users05,
    githubUsername: "christianfrans",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "Okta Prianto",
    posisi: "S-02",
    minat: "Fullstack Developer",
    photo: users04,
    githubUsername: "oktaprianto",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
];

export default Search;
