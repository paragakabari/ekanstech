"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BoostSection from "../BoostSection/BoostSection ";
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
                      <img
                        src="assets/img/service/service-details__img4.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Web Development</h2>
                      <p>
                        Whether you need modifications to your existing website
                        or a brand new website that perfectly represents your
                        brand or product, we have got you covered.
                      </p>
                      <br />
                      <p>
                        Our expert team at Ekanstech Solution has consistently
                        delivered remarkable results in bringing our
                        clients&#39; visions for their website design,
                        development, and expected returns to life. Whether
                        it&#39;s making updates to your current website or
                        creating a completely new one, we possess the skills and
                        expertise to handle it all. Our dedication to excellence
                        ensures that we meet your requirements and exceed your
                        expectations, creating a website that effectively
                        showcases your brand and drives the desired outcomes.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="service-details__text">
                    <div className="title">
                      <h3>SERVICES WE UNDERTAKE</h3>
                      <p>
                        At Ekanstech Solution, we alleviate your stress by
                        creating a single responsive website that adapts
                        seamlessly to different devices. This eliminates the
                        need for separate desktop and mobile versions, avoiding
                        duplicate content issues that can harm your search
                        ranking. Our expertise in responsive web design ensures
                        a consistent and user-friendly experience across
                        devices, saving you time and enhancing your brand&#39;s
                        online presence.
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
                                <p>Extensive research & client consultations</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Use of cutting edge tools & techniques.</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Innovative Website design Ideas</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Well designed website can create and enhance
                                  perception – Good Brand Value
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="service-details__text">
                      <div className="title">
                        <p>
                          At Ekanstech Solution, we implement modern performance
                          techniques, including caching and responsive image
                          display, to optimize the loading speed of your web
                          pages. By reducing lag and improving page load times,
                          we enhance the overall user experience and increase
                          the likelihood of converting casual website visitors
                          into potential business prospects.
                        </p>
                        <br />
                        <p>
                          In order to streamline maintenance and minimize costs,
                          we develop separate desktop and mobile sites. This
                          approach eliminates the need for maintaining and
                          configuring two separate versions of your website,
                          resulting in long-term cost savings. Our customized
                          and cost-effective packages are designed to meet the
                          unique needs of our clients, ensuring a seamless and
                          hassle-free experience. Trust our team of experts to
                          handle any challenges that may arise during the
                          process, allowing you to focus on your core business
                          while we handle your website effortlessly.
                        </p>
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
                        <Link href="app-development">
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
                        <Link className="active" href="#">
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
