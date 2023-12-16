import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function DetailM(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle}>Detail</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Muhammad Rifqi Fauzi</ModalHeader>
        <ModalBody>
        Hai, Saya Muhammad Rifqi Fauzi. Sebagai seorang front end developer dan back end, saya telah menyelesaikan sertifikasi bootcamp studi independen di Dicoding Academy melalui Kampus Merdeka. Saya juga merupakan mahasiswa di program studi Sistem Informasi di Universitas Trilogi. Dengan latar belakang pendidikan dan pengalaman praktis, saya memiliki keterampilan dalam mengembangkan antarmuka pengguna (UI) yang responsif dan juga dalam merancang dan mengelola bagian dari sisi server dari aplikasi web. Kombinasi antara pendidikan formal dan pelatihan praktis telah mempersiapkan saya untuk menjadi seorang profesional yang kompeten dalam industri teknologi informasi. Saya bersemangat untuk terus belajar dan berkembang dalam bidang pengembangan perangkat lunak.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Done
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DetailM;
