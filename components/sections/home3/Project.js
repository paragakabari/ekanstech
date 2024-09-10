'use client'
import Link from "next/link"
export default function Project() {
    return (
        <>
        {/*Start Project One*/}
        <section className="project-one">
            <div className="container">
                <div className="sec-title text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Portfolio</h4>
                    </div>
                    <h2>Ready Services For You</h2>
                </div>

                {/*Start Single Project One*/}
                <div className="project-one__single wow animated fadeInLeft" data-wow-delay="0.1s">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-1.jpg" alt="#"/>
                                <div className="overlay-icon">
                                    <Link href="assets/img/project/project-one-1.jpg" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="project-one__single-content-box">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <p><Link href="#">Developed By Jhon</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="#">Advanced Website UI Interfaces</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="#">
                                        <span className="txt">View Project</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Single Project One*/}

                {/*Start Single Project One*/}
                <div className="project-one__single wow animated fadeInRight" data-wow-delay="0.2s">
                    <div className="row">
                        <div className="col-xl-5 order-22">
                            <div className="project-one__single-content-box project-one__single-content-box--style2">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <p><Link href="#">Developed By Jhon</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="#">Design and Extreme Programming</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="#">
                                        <span className="txt">View Project</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 order-11">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-2.jpg" alt="#"/>
                                <div className="overlay-icon">
                                    <Link href="assets/img/project/project-one-2.jpg" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*End Single Project One*/}
                {/*Start Single Project One*/}
                <div className="project-one__single project-one__single--style2 wow animated fadeInLeft"
                    data-wow-delay="0.3s">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="project-one__single-img-box">
                                <img src="assets/img/project/project-one-3.jpg" alt="#"/>
                                <div className="overlay-icon">
                                    <Link href="assets/img/project/project-one-3.jpg" className="img-popup">
                                        <span className="icon-plus"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="project-one__single-content-box">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <p><Link href="#">Developed By Jhon</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <p><Link href="#">Sep 30, 2022</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h2><Link href="#">Design & Concept At Work</Link></h2>
                                </div>
                                <div className="btn-box">
                                    <Link className="thm-btn" href="#">
                                        <span className="txt">View Project</span>
                                        <i className="icon-next"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Single Project One*/}

                <div className="project-one__btn-box">
                    <Link className="thm-btn" href="#">
                        <span className="txt">View All Project</span>
                        <i className="icon-next"></i>
                    </Link>
                </div>

            </div>
        </section>
        {/*End Project One*/}
        </>
    )
}
