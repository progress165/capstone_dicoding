import React from "react";
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

import users from "../../assets/images/users.webp";

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
                    src={users}
                    alt="..."
                    className="card-img-top p-2 m-2"
                    style={{ maxWidth: "100px" }}
                  />
                  <CardTitle tag="h5" className="text-xl font-bold">
                    {orang.nama}
                  </CardTitle>
                  <CardText className="text-sm text-gray-500 uppercase font-semibold">
                    {orang.posisi}
                  </CardText>
                  <CardText className="text-sm text-gray-300 uppercase font-semibold">
                    {orang.minat}
                  </CardText>
                  <div className="mt-6 pt-5">
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
    githubUsername: "ahmads99",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "Arya Haekal",
    posisi: "F-08",
    minat: "Front-End Developer",
    githubUsername: "aryaaa40",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "M. Rifqi Fauzi",
    posisi: "F-08",
    minat: "Front-End Developer",
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
    githubUsername: "christianfrans",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
  {
    nama: "Okta Prianto",
    posisi: "F-08",
    minat: "Fullstack Developer",
    githubUsername: "oktaprianto",
    mediaSosial: [
      { icon: <FaGithub />, warna: "dark" },
      { icon: <FaLinkedinIn />, warna: "dark" },
      { icon: <FaInstagram />, warna: "dark" },
    ],
  },
];

export default Search;
