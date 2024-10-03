import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact">
        {/*Start Contact Page*/}
        <section className="contact-page">
          <div className="contact-page__top">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__top-content">
                    <div className="contact-page__top-content-top sec-title-animation animation-style1">
                      <h2>Get in Touch</h2>
                      <p>
                        No time to waste – we’ve got exactly what you need! Step
                        up to success with Ekanstech IT Solution. Our team is
                        poised and ready to propel your business to new heights.
                        Don’t miss out, call us today for cutting-edge,
                        dependable digital marketing services that guarantee
                        your triumph.
                      </p>
                    </div>

                    <div className="contact-page__top-content-bottom">
                      <h2>Contact Info</h2>
                      <ul>
                        <li>
                          <div className="inner">
                            <div className="icon-box">
                              <span className="icon-pin"></span>
                            </div>

                            <div className="content-box">
                              <h4>Address</h4>
                              <p>
                                <Link href="https://maps.app.goo.gl/Dh545u1x7F1pNWBJ7" target="_blank">
                                  238, Atlanta Mall, Near sudama chock, Mota
                                  Varachha <br /> ( Digital Valley ), Surat
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="inner">
                            <div className="icon-box">
                              <span className="icon-phone-call"></span>
                            </div>

                            <div className="content-box">
                              <h4>Phone</h4>
                              <p>
                                <Link href="tel:8160362614">
                                  +91 81603 62614
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="inner">
                            <div className="icon-box">
                              <span className="icon-email"></span>
                            </div>

                            <div className="content-box">
                              <h4>Email</h4>
                              <p>
                                <Link href="mailto:ekanstechinfo@gmail.com">
                                  ekanstechinfo@gmail.com
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18458.126597653896!2d72.87530210590099!3d21.24211111215467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4517873113d82fa5%3A0xe553cc8c5ab21d18!2sEkanstech%20Solutions!5e1!3m2!1sen!2sin!4v1726034764863!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{
                        border: "3px solid #68cbf4",
                        borderRadius: "10px",
                        width:"100%"
                      }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page__bottom">
            {/*Start Contact Two*/}
            <div className="contact-page__bottom-form">
              <div className="container">
                <div className="contact-page__bottom-form-inner">
                  <div className="title-box sec-title-animation animation-style1">
                    <h2>Let's Get in Touch</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <div className="contact-page__bottom-form-inner-box">
                    <form
                      
                      className="contact-page__form contact-form-validated"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Your Name*"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="email"
                              placeholder="Your Email*"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Phone*"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="Subject*"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="contact-page__input-box">
                            <textarea
                              name="message"
                              placeholder="Write Message*"
                            ></textarea>
                          </div>
                          <div className="contact-page__btn">
                            <button
                              className="thm-btn"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span className="txt">Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*End Contact Two*/}
          </div>
        </section>
        {/*End Contact Page*/}
      </Layout>
    </>
  );
}
