'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }



}


export default function Testimonial() {
    return (
        <>
        {/*Start Testmonials Three*/}
        <section className="testimonials-three">
            <div className="testimonials-three__shape1 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape1.png" alt="shapes"/>
            </div>
            <div className="testimonials-three__shape2 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape2.png" alt="shapes"/>
            </div>
            <div className="testimonials-three__shape3 rotate-me">
                <img src="assets/img/shape/testimonials-three__shape3.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="testimonials-three__img">
                            <ul>
                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <img src="assets/img/testimonial/testimonials-three__img1.jpg" alt="image"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <div className="inner">
                                            <img src="assets/img/testimonial/testimonials-three__img2.jpg" alt="image"/>
                                        </div>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Two Img*/}
                                    <div className="single-testimonials-three__img-box">
                                        <img src="assets/img/testimonial/testimonials-three__img3.jpg" alt="image"/>
                                    </div>
                                    {/*End About Two Img*/}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="testimonials-three__content">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Customers Feedback</h4>
                                </div>
                                <h2>
                                    What Says Our Client’s<br/>About Diligent
                                </h2>
                            </div>

                            {/* If we need navigation buttons */}
                            <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                <div className="swiper-button-prev h1p" id="testimonials-three__swiper-button-prev">
                                    <i className="icon-left-arrow right"></i>
                                </div>
                                <div className="swiper-button-next h1n" id="testimonials-three__swiper-button-next">
                                    <i className="icon-right-arrow-angle left"></i>
                                </div>
                            </div>
                            <div className="testimonials-three__content-inner">
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">

                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    “ Concor delivers sectors concor delivers world className infrastructure
                                                    the is a world className infrastructure solutions across a broad
                                                    industry start and end of creativity to customers and the
                                                    stakeholders across the world broad ...”
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="icon-box">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    “ Concor delivers sectors concor delivers world className infrastructure
                                                    the is a world className infrastructure solutions across a broad
                                                    industry start and end of creativity to customers and the
                                                    stakeholders across the world broad ...”
                                                </p>
                                            </div>
                                            <div className="athor-box">
                                                <h3>Alina Kolaminov</h3>
                                                <p>Marketing Agent</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    </div>


                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Testmonials Three*/}
            
        </>
    )
}
