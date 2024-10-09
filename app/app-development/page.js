import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BoostSection from "../BoostSection/BoostSection ";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Mobile App Development"
        bgImg={"assets/img/App-development.png"}
      >
        {/*Start Service Details*/}
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-details__content">
                  <div className="service-details__img-box1">
                    <div className="img-box">
                      <img
                        src="assets/img/service/service-details__img1.png"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Mobile App Development</h2>
                      <p>
                        At Ekanstech Solution, our Mobile App Developer boasts
                        an impressive portfolio of creating interactive,
                        well-designed, and practical Android and iOS
                        applications. With a proven track record, our developer
                        consistently delivers exceptional results. <br />
                        <br />
                        When it comes to app development, our experts at
                        Ekanstech Solution are renowned for their innovative
                        approach, meticulous attention to detail, and efficient
                        functionality. We take pride in our commendable track
                        record of developing cutting-edge applications that not
                        only captivate users but also fulfill their needs
                        effectively.
                      </p>
                      <br />
                      <h4>
                        <b>SERVICES WE UNDERTAKE</b>
                      </h4>
                      <br />
                      <p>
                        At Ekanstech Solution, our dedicated experts go the
                        extra mile by conducting thorough research on
                        competitive brands and relevant markets. They stay
                        updated with the latest programming languages, enabling
                        them to brainstorm ideas based on your specific needs
                        and objectives. Our skills encompass designing mockup
                        apps, formulating comprehensive app marketing plans, and
                        much more.
                      </p>
                    </div>
                  </div>

                  <div className="service-details__img-box2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="img-box">
                          <img
                            src="assets/img/service/service-details__img2.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="content-box">
                          <ul className="list-item clearfix">
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Initial Idea Validation</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>App Designing</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Monetization Strategies</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>App Development and Marketing</p>
                              </div>
                            </li>
                          </ul>
                          <br />
                          <p>
                            To have your app designed and developed by our
                            highly efficient and professional team members,
                            kindly reach out to us today. We assure you that we
                            will not only meet but also exceed your
                            expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="service-details__prev-next-option blog-details__prev-next-option">
                                        <div className="single-box left">
                                            <div className="icon">
                                                <Link href="#">
                                                    <span className="icon-left-arrow"></span>
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <p>Prev service</p>
                                                <h3>
                                                    <Link href="#">We grow your business</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-box right">
                                            <div className="text">
                                                <p>Next service</p>
                                                <h3>
                                                    <Link href="#">Think beyond the wave</Link>
                                                </h3>
                                            </div>
                                            <div className="icon">
                                                <Link href="#">
                                                    <span className="icon-right-arrow-angle"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>

              {/*Start Sidebar*/}
              <div className="col-xl-4">
                <div className="service-details__sidebar">
                  {/*Start Sidebar Single*/}
                  {/* <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here..."/>
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div> */}
                  {/*End Sidebar Single*/}

                  {/*Start Sidebar Single*/}
                  <div
                    className="sidebar__single sidebar__category wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="title-box">
                      <h2>Related Services</h2>
                    </div>

                    <ul className="sidebar__category-list">
                      <li>
                        <div className="cercale-box"></div>
                        <Link className="active" href="#">
                          Mobile App Development
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="uiux-design">
                          UI/UX Designer
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="web-development">
                          Web Developer
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="digital-marketing">
                          Digital Marketing
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Sidebar Single*/}

                  {/*Start Sidebar Single*/}
                  {/* <div className="sidebar__single sidebar__dwonlode-box wow fadeInUp" data-wow-delay=".5s">
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
                            </div> */}
                  {/*End Sidebar Single*/}

                  {/*Start Sidebar Single*/}
                  {/* <div
                                        className="sidebar__contact-info wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        <div
                                            className="sidebar__contact-info-bg"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/img/service/service-details-sideber__img1.jpg)",
                                            }}
                                        ></div>
                                        <div className="content-box text-center">
                                            <h3>
                                                Have Any Discussion
                                                <br />
                                                About Project?
                                            </h3>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#">
                                                    <span className="txt">Contact Us</span>
                                                    <i className="icon-next"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                  {/*End Sidebar Single*/}
                </div>
              </div>
              {/*End Sidebar*/}
            </div>
            <div className="pt-5 mt-5">
              <BoostSection />
            </div>
          </div>
        </section>
        {/*End Blog Details*/}
      </Layout>
    </>
  );
}
