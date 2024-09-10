'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Web Development">

            {/*Start Service Details*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-details__content">
                                <div className="service-details__img-box1">
                                    <div className="img-box">
                                        <img src="assets/img/service/service-details__img4.jpg" alt="image"/>
                                    </div>
                                    <div className="content-box">
                                        <h2>Web Development</h2>
                                        <p>
                                            Applications are like the lifeblood of mobile phones and tablets today. The true
                                            potential of you mobile phone is harnessed by applications that can provide
                                            utility. Apps come under of the various segments. Nowad technology has become
                                            super advanced. Even normal people are getting themselves enrolled in coding and
                                            programming and creating applications on their own.
                                        </p>
                                        <ul className="list-item clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Our services will feel like A mint of creativity.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Our services will feel like A mint of creativity.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Our services will feel like A mint of creativity.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="service-details__text">
                                    <div className="title">
                                        <h3>Start with A Plan and Finish with Results</h3>
                                        <p>
                                            The magic of marketing, the science of sales. Build your brand’s voice. Grow
                                            your brand by zeroing in on your target market. Affordable, targeted media for
                                            everyone.
                                        </p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            At vero eos et accusamus et iust odio dignissimos ducimus blanditiis praesentium
                                            voluptatum deleniti atque corrupti quos dol quamolestias excepturi sint
                                            occaecati Lead generati inbound marketing, web development, and marketing
                                            automation solutions.
                                        </p>
                                    </div>
                                </div>

                                <div className="service-details__img-box2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="img-box">
                                                <img src="assets/img/service/service-details__img2.jpg" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="content-box">
                                                <p>
                                                    Applications are like the lifeblood mobile phones and tablets today. The
                                                    true potential you mobile phone is harnessed applications that can
                                                    provide
                                                    utility. Apps come under of the various segments. Nowad technology has
                                                    become super advanced even normal people are getting themselves.
                                                </p>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Our services will feel like mint of creativity.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>We develop application excellent technology.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Practice for providing all application problems.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-details__prev-next-option blog-details__prev-next-option">
                                    <div className="single-box left">
                                        <div className="icon">
                                            <Link href="#"><span className="icon-left-arrow"></span></Link>
                                        </div>
                                        <div className="text">
                                            <p>Prev service</p>
                                            <h3><Link href="#">We grow your business</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-box right">
                                        <div className="text">
                                            <p>Next service</p>
                                            <h3><Link href="#">Think beyond the wave</Link></h3>
                                        </div>
                                        <div className="icon">
                                            <Link href="#"><span className="icon-right-arrow-angle"></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*Start Sidebar*/}
                        <div className="col-xl-4">
                            <div className="service-details__sidebar">
                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search here..."/>
                                        <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                    </form>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                    <div className="title-box">
                                        <h2>Related Services</h2>
                                    </div>

                                    <ul className="sidebar__category-list">
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="app-development">Mobile App Development<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="uiux-design">UI/UX Designer<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link className="active" href="#">Web Developer<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="digital-marketing">Digital Marketing<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                        <li>
                                            <div className="cercale-box"></div>
                                            <Link href="corporate-agency">Corporate Agency<span
                                                    className="icon-right-arrow-angle"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s">
                                    <div className="dwonlode-box">
                                        <Link href="#">
                                            Download Doc
                                            <i className="icon-download"></i>
                                        </Link>
                                        <Link href="#">
                                            Download Pdf
                                            <i className="icon-download"></i>
                                        </Link>
                                    </div>
                                </div>
                                {/*End Sidebar Single*/}

                                {/*Start Sidebar Single*/}
                                <div className="sidebar__contact-info wow fadeInUp" data-wow-delay=".5s">
                                    <div className="sidebar__contact-info-bg"
                                        style={{ backgroundImage: 'url(assets/img/service/service-details-sideber__img1.jpg)' }} >
                                    </div>
                                    <div className="content-box text-center">
                                        <h3>Have Any Discussion<br/>About Project?</h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn" href="#">
                                                <span className="txt">Contact Us</span>
                                                <i className="icon-next"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*End Sidebar Single*/}

                            </div>
                        </div>
                        {/*End Sidebar*/}

                    </div>
                </div>
            </section>
            {/*End Blog Details*/}
            </Layout>
        </>
    )
}