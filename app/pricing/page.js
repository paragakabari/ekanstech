'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Pricing">
                {/*Start Pricing One*/}
                <section className="pricing-one">
                    <div className="container">
                        <div className="sec-title-two text-center sec-title-animation animation-style1">
                            <h2>Pick Your <span>Pricing Plan</span></h2>
                            <p>It s about telling a story through the message and visuals
                                that get your<br/>ideas across to your customers</p>
                        </div>
                        <div className="row">

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-title">
                                        <h2>Free Plan</h2>
                                        <p>Web design is our creativeness</p>
                                    </div>
                                    <div className="pricing-one__single-value">
                                        <h2>$0<span>/mo</span></h2>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Authorizing your web identity</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Design as boundless as space</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Undergo digital innovation</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Motivated web solutions</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Purchase This Plan</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="category-box">
                                        <p>Popular Plan</p>
                                    </div>
                                    <div className="pricing-one__single-title">
                                        <h2>Basic Plan</h2>
                                        <p>We create websites for all</p>
                                    </div>
                                    <div className="pricing-one__single-value">
                                        <h2>$29<span>/mo</span></h2>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Authorizing your web identity</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Design as boundless as space</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Undergo digital innovation</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Motivated web solutions</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Purchase This Plan</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                            {/*Start Single Pricing One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-title">
                                        <h2>Premium Plan</h2>
                                        <p>Brilliant websites true results</p>
                                    </div>
                                    <div className="pricing-one__single-value">
                                        <h2>$49<span>/mo</span></h2>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Authorizing your web identity</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Design as boundless as space</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Undergo digital innovation</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Motivated web solutions</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Purchase This Plan</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Pricing One*/}

                        </div>
                        <div className="pricing-one__text text-center">
                            <p>Want to get a free consultation? <Link href="contact">Contact us.</Link></p>
                        </div>
                    </div>
                </section>
                {/*End Pricing One*/}

                {/*Start Cta Two*/}
                <section className="cta-two testmonials">
                    <div className="container">
                        <div className="cta-two__inner">
                            <div className="cta-two__inner-bg"
                                style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                            <div className="cta-two__content sec-title-animation animation-style1">
                                <h2>Have Any Discussion?</h2>
                                <p>Gathered have greater made fruitful. Void to let to know
                                    about that you ll sixth upon day.</p>
                            </div>
                            <div className="cta-two__btn">
                                <Link className="thm-btn" href="#">
                                    <span className="txt">Contact with Us</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Cta Two*/}

            </Layout>
        </>
    )
}