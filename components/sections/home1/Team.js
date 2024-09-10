import Link from "next/link"
export default function Team() {
    return (
        <>
        {/*Start Team Two*/}
        <section className="team-two">
            <div className="team-two__shape1">
                <img src="assets/img/shape/team-two__shape1.png" alt="shapes"/>
            </div>
            <div className="team-two__shape2">
                <img src="assets/img/shape/team-two__shape2.png" alt="shapes"/>
            </div>
            <div className="team-two__shape3">
                <img src="assets/img/shape/team-two__shape3.png" alt="shapes"/>
            </div>
            <div className="team-two__shape4">
                <img src="assets/img/shape/team-two__shape4.png" alt="shapes"/>
            </div>
            <div className="team-two__shape5">
                <img src="assets/img/shape/team-two__shape5.png" alt="shapes"/>
            </div>
            <div className="container">
                <div className="sec-title-three text-center sec-title-animation animation-style1">
                    <div className="sub-title">
                        <h4>Team Members</h4>
                    </div>
                    <h2>
                        Creative Team Leaders
                    </h2>
                </div>
                <div className="row">
                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-1.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Daniel Stiphen</Link></h3>
                                <p>Web Developerr</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-2.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Jenifer M. Florita</Link></h3>
                                <p>Website Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                    {/*Start Team Two Single*/}
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                        <div className="team-two__single">
                            <div className="team-two__single-overlay-bg"></div>
                            <div className="team-two__single-img">
                                <img src="assets/img/team/team-v2-3.jpg" alt="image"/>
                                <div className="social-share-box">
                                    <span className="icon-plus"></span>
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="#">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-two__single-content">
                                <h3><Link href="#">Jhonshon Borison</Link></h3>
                                <p>UI/UX Designer & Developer</p>
                            </div>
                        </div>
                    </div>
                    {/*End Team Two Single*/}

                </div>
            </div>
        </section>
        {/*End Team Two*/}
        </>
    )
}
