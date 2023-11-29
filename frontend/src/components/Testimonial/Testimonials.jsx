import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
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

        ]
    }


    return (<Slider{...settings}>
        <div className="testimonial py-4 px-3">
            <p>Liburan yang luar biasa! Destinasi yang menakjubkan dengan pemandangan yang memesona. Layanan dari tim mereka sungguh ramah dan membantu.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Muhammad Abdul</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Pengalaman yang tak terlupakan! Paket perjalanan yang disusun dengan rapi, membuat liburan jadi lebih menyenangkan. Pasti akan kembali untuk petualangan lainnya.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Dinda Kirana</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Saya sangat senang dengan pilihan paket liburan yang mereka tawarkan. Aktivitas yang seru, semuanya berjalan dengan sempurna. Aku akan kembali untuk liburan selanjutnya.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Kristian</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Pelayanan pelanggan yang luar biasa! Selalu responsif dan membantu menjawab setiap pertanyaan saya. Terima kasih sudah membuat liburan saya begitu menyenangkan.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Salsabilla</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Perjalanan yang terencana dengan baik, pilihan destinasi yang mengagumkan, dan pengalaman yang memuaskan. Membuatku sangat puas dan keluargaku juga sangat menikmatinya.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Kevin Nathan</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>)

};

export default Testimonials;