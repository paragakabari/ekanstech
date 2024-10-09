
'use client'
import Link from "next/link"
export default function Banner() {
    return (
        <>
        {/*Start Banner One*/}
        <section className="banner-one">
            <div className="banner-one__shape1 float-bob-x">
                <img src="assets/img/shape/banner-one__shape1.png" alt="#"/>
            </div>
            <div className="banner-one__shape2 rotate-me">
                <img src="assets/img/shape/banner-one__shape2.png" alt="#"/>
            </div>
            <div className="banner-one__shape3 float-bob-y">
                <img src="assets/img/shape/banner-one__shape3.png" alt="#"/>
            </div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="sub-title">
                            <h5>Senior Web Developer</h5>
                        </div>
                        <div className="big-title">
                            <h2>Hi I&#39;m Jhon Smith<br/>Web Developer</h2>
                        </div>
                        <div className="text">
                            <p>There are many variations of passages of available, but the<br/> majority have suffered
                                randomised words.</p>
                        </div>
                        <div className="btn-box">
                            <Link className="thm-btn" href="#">
                                <span className="txt">
                                    Just Say Hello
                                    <i className="icon-next"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="banner-one__img wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner">
                            <img src="assets/img/slider/banner-one__mian-img.jpg" alt="banner"/>
                        </div>
                        <div className="banner-one__img-bg"></div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Banner One*/}

        </>
    )
}
