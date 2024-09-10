'use client'
export default function About() {
    return (
        <>
        {/*Start About One*/}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-one__img-box">
                            <div className="about-one__img-box-inner">
                                <img src="assets/img/about/about-one-1.jpg" alt="#"/>
                            </div>
                            <div className="about-one__overlay-box text-center">
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                        <h2>8</h2>
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <h4>Years Of<br/>Experiences</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="about-one__overlay-icon-box1">
                                <img src="assets/img/about/about-one__logo1.png" alt="logo"/>
                            </div>
                            <div className="about-one__overlay-icon-box2">
                                <img src="assets/img/about/about-one__logo2.png" alt="logo"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                        <div className="about-one__content-box">
                            <div className="sec-title sec-title-animation animation-style1">
                                <div className="sub-title">
                                    <h4>About Us</h4>
                                </div>
                                <h2>Ready Services For You</h2>
                            </div>
                            <div className="text">
                                <p>
                                    Im a About Me Web Developer, Over the past10+ years I’ve created well-crafted mobile
                                    and web apps by connecting Business goals with user needs. Previously worked at a
                                    healthcare start-up as a product designer and Formerly at Electronic Arts, Apple,
                                    Sea Group.
                                </p>
                            </div>
                            <div className="about-one__content-list-box">
                                <ul>
                                    <li>
                                        <div className="circle-box"></div>
                                        <p>Consultants rarely have the luxury of partnering with businesses.</p>
                                    </li>
                                    <li>
                                        <div className="circle-box"></div>
                                        <p>Trust, support and develop each other to achieve excellent results.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-one__progress-box">
                                <ul className="clearfix">
                                    <li className="wow slideInUp animated" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                    
                                                    <div className="inner-text count-box">
                                                        
                                                        <span className="count-Parsent">76 %</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Wordpress</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                    
                                                    <div className="inner-text count-box">
                                                        <span className="count-text" data-stop="82"
                                                            data-speed="2000"></span>
                                                        <span className="count-Parsent">82 %</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Development</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow slideInUp animated" data-wow-delay="0.5s" data-wow-duration="1500ms">
                                        <div className="circle-progress-single text-center">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                    
                                                    <div className="inner-text count-box">
                                                        <span className="count-Parsent">90 %</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="circle-progress-title">
                                                <h3>Java Script</h3>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End About One*/}

        </>
    )
}
