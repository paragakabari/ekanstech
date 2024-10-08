import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="UI/UX Design">
        {/*Start Service Details*/}
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-details__content">
                  <div className="service-details__img-box1">
                    <div className="img-box">
                      <img
                        src="assets/img/service/service-details__img3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>UI/UX Design</h2>
                      <p>
                        Our team of UI/UX designers collaborates closely with
                        you to create captivating and purposeful designs for
                        your web or mobile application, ensuring that users
                        enjoy meaningful and immersive experiences.
                        <br />
                        <br />
                        Regardless of possessing a groundbreaking idea,
                        executing outstanding marketing campaigns, and employing
                        top-notch salespeople, you might be wondering why you’re
                        still not attracting a significant number of customers.
                        The probable reason behind this could be attributed to
                        the subpar user experience offered by your website. At
                        Ekanstech Solution, we are here to assist you with
                        precisely that. Simply utilize our specialized UX/UI
                        design services, tailored to meet your specific needs.
                        With our wealth of expertise, we will thoroughly
                        evaluate your website and propose strategic enhancements
                        aimed at improving conversion rates.
                      </p>
                      <br />
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
                          <h3>
                            <b>Our Process</b>
                          </h3>
                          <p>
                            Rely on the expertise of our proficient UX designers
                            to support you in creating and delivering
                            exceptional products and services that align with
                            your unique requirements, empowering your business
                            to achieve rapid growth.
                          </p>
                          <ul className="list-item clearfix">
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Undertaking substantial research</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Design both web and mobile apps</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>Enhanced accessibility and readability.</p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Highly Experienced Designers – Good design
                                  equals good business.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="service-details__text">
                      <div className="title">
                        <p>
                          Our team of professionals provides a wide array of
                          UX/UI design services, including design consultancy,
                          product design, UX research, UI and animation, design
                          testing, brand strategy, and more. With our skilled
                          expertise, we cater to all your design requirements
                          with meticulous attention to detail and proficiency.
                        </p>
                        <br />
                        <p>
                          We specialize in crafting user-friendly interfaces
                          that effortlessly guide visitors through your website.
                          To learn more about our services, please reach out to
                          us at <span className="hightLight">+91 81603 62614</span>,
                          and our team will be delighted to assist you.
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
                        <Link className="active" href="#">
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
                  <div
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
  );
}
