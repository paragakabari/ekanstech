'use client'
import Link from "next/link"
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"

export default function About() {
    return (
        <>
        {/*Start About Three*/}
        <section className="about-three">
            <div className="about-three__shape1 float-bob-y">
                <img src="assets/img/shape/about-three__shape1.png" alt="shapes"/>
            </div>
            <div className="about-three__shape2">
                <img src="assets/img/shape/about-three__shape2.png" alt="shapes"/>
            </div>
            <div className="about-three__shape3">
                <img src="assets/img/shape/about-three__shape3.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__content mx-auto mb-md-5">
                            <div className="sec-title-four sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>Get To Know About Us</h4>
                                </div>
                                <h2>
                                    We Are Here to Give You<br/>Effective Ideas
                                </h2>
                            </div>
                            <div className="text">
                                <p>Creative design slogans can help people connect more to the<br/>
                                    scenario that the accounts for making available.</p>
                            </div>
                            <div className="about-three__fact-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                            <CounterUp end={25} />
                                                <i className="icon-plus-symbol-button"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Completed Projects</h3>
                                            </div>
                                            <div className="text">
                                                <p>With 100% Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-three__fact-single">
                                            <div className="count-outer count-box">
                                            <CounterUp end={89} />
                                                <i className="icon-percentage"></i>
                                            </div>
                                            <div className="title">
                                                <h3>Company Growth</h3>
                                            </div>
                                            <div className="text">
                                                <p>Avg. Every Year</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="about-three__img">
                                <div className="img-box">
                                    <img src="assets/img/about/about-three__img1 (2).jpg" alt="image"/>
                                </div>
                                <div className="title-box">
                                    <h3>We Are The Best Digital<br/>Agencies In The City</h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="about">
                                            <span className="txt">Learn More</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__img-box mx-auto">
                            <ul>
                                <li className="wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <img src="assets/img/about/about-three__img2 (2).jpg" alt="image"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>

                                <li className="wow fadeInRight" data-wow-delay="0ms" style={{transform:"scale(1.25)"}} data-wow-duration="1500ms">
                                    {/*Single About Three Img*/}
                                    <div className="single-about-three__img-box">
                                        <img src="assets/img/about/about-three__img3 (2).jpg"  alt="image"/>
                                    </div>
                                    {/*End About Three Img*/}
                                </li>
                            </ul>

                            <div className="about-three__img-box-bottom wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                {/*Single About Three Img*/}
                                <div className="single-about-three__img-box">
                                    <img src="assets/img/about/about-three__img4 (2).jpg" alt="image"/>
                                </div>
                                {/*End About Three Img*/}
                            </div>

                            <div className="overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={5} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Years Of<br/>Experiences</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End About Three*/}
        </>
    )
}
