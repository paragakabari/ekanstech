"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BoostSection from "../BoostSection/BoostSection ";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Digital Marketing"
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
                        src="assets/img/service/service-details__img5.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Digital Marketing</h2>
                      <p>
                        At Ekanstech Solution, our experienced team of Digital
                        Marketing Experts specializes in facilitating brand
                        development, implementing effective link building
                        strategies, and enhancing search rankings through a wide
                        range of online techniques, strategies, and tools.
                      </p>
                      <br />
                      <p>
                        We harness the power of various digital platforms,
                        including search engines, websites, social media, email,
                        and mobile apps, to promote your business effectively.
                        By leveraging these online media channels, we endorse
                        your products and services, ensuring your brand receives
                        maximum exposure and reaches the right target audience.
                        Our digital marketing efforts are designed to drive
                        engagement, increase brand visibility, and generate
                        valuable leads for your business.
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
                          <h3 style={{ letterSpacing: "3px" }}>
                            <b>SERVICES WE UNDERTAKE</b>
                          </h3>
                          <p>
                            We prioritize designing user-friendly interfaces
                            that ensure a seamless experience for visitors to
                            your website. Our team goes the extra mile,
                            utilizing innovative approaches, strategies, and
                            tools to enhance your company&#39;s corporate image.
                          </p>
                          <ul className="list-item clearfix">
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Content is SEO rich to boost your online reach
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  We cater to both small and large businesses
                                  and their brands
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Budget-friendly advertising to suit your
                                  budget
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Social media marketing for your brand –
                                  Facebook, Instagram, Twitter etc.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="content-box">
                      <p>
                        Our advertising campaigns are strategically targeted
                        based on user preferences and initial actions, employing
                        sophisticated algorithms of social media marketing
                        (SMM). By analyzing and aggregating user preferences, we
                        deliver highly targeted ad campaigns to users who have
                        expressed interest in your products or services.
                      </p>
                      <br />
                      <p>
                        In this fiercely competitive business landscape, we
                        assist you in maintaining relevance and retaining your
                        client base, while also nurturing long-term engagement.
                        We understand the vital role your marketing plan plays
                        in establishing a strong reputation and expanding your
                        referral network.
                      </p>
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
                        <Link href="web-development">
                          Web Developer
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link className="active" href="#">
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
