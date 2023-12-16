import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    spacing: 50,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testi">
        <div className="d-flex justify-content-center">
          <img src={ava01} className="w-25 h-25 rounded-5" alt="" />
        </div>
        <div className="testi_content text-center">
          <h1>Abraham Ahmad</h1>
          <p>Liburan yang luar biasa! Destinasi yang menakjubkan dengan pemandangan yang memesona. Layanan dari tim mereka sungguh ramah dan membantu.</p>
        </div>
      </div>

      <div className="testi">
        <div className="d-flex justify-content-center">
          <img src={ava01} className="w-25 h-15 rounded-5" alt="" />
        </div>
        <div className="testi_content text-center">
          <h1>John Doe</h1>
          <p>Pengalaman yang tak terlupakan! Paket perjalanan yang disusun dengan rapi, membuat liburan jadi lebih menyenangkan.</p>
        </div>
      </div>

      <div className="testi">
        <div className="d-flex justify-content-center">
          <img src={ava01} className="w-25 h-25 rounded-5" alt="" />
        </div>
        <div className="testi_content text-center">
          <h1>John Doe</h1>
          <p>Saya sangat senang dengan pilihan paket liburan yang mereka tawarkan. Penginapan yang nyaman, aktivitas yang seru, semuanya berjalan dengan sempurna.</p>
        </div>
      </div>

      <div className="testi">
        <div className="d-flex justify-content-center">
          <img src={ava01} className="w-25 h-25 rounded-5" alt="" />
        </div>
        <div className="testi_content text-center">
          <h1>John Doe</h1>
          <p>Travel agency ini sungguh mengagumkan! Mereka membantu merencanakan liburan keluarga kami dengan sempurna. Anak-anak juga sangat menikmatinya!</p>
        </div>
      </div>
      
      {/* <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
          explicabo provident hic distinctio molestias voluptates nobis alias
          placeat suscipit earum debitis recusandae voluptate illum expedita
          corrupti aliquid doloribus delectus?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
          explicabo provident hic distinctio molestias voluptates nobis alias
          placeat suscipit earum debitis recusandae voluptate illum expedita
          corrupti aliquid doloribus delectus?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
          explicabo provident hic distinctio molestias voluptates nobis alias
          placeat suscipit earum debitis recusandae voluptate illum expedita
          corrupti aliquid doloribus delectus?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
          explicabo provident hic distinctio molestias voluptates nobis alias
          placeat suscipit earum debitis recusandae voluptate illum expedita
          corrupti aliquid doloribus delectus?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div> */}
    </Slider>
  );
};

export default Testimonials;
