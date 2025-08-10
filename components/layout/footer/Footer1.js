import Link from "next/link";
import chatboat from "../../../public/assets/img/Cute_chat_bot.png"

export default function Footer1() {
  return (
    <>
      <footer className="footer-three">
        <div className="footer-main footer-main__three">
          <div className="footer-three__shape1">
            <img src="assets/img/shape/footer-three__shape1.png" alt="shapes" />
          </div>
          <div className="footer-three__shape2">
            <img src="assets/img/shape/footer-three__shape2.png" alt="shapes" />
          </div>
          <div className="container">
            <div className="footer-main__three-top">
              <div className="footer-three__logo-box">
                <Link href="/">
                  <img
                    src="assets/img/logo/footer-three-1.png"
                    style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="footer-three__get-quote-form">
                <div className="title-box">
                  <h2>Get Free Quote</h2>
                  <p>Best solutions for your company</p>
                </div>

                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <button className="submit thm-btn">
                      <span className="txt">Get A Quote</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="footer-main__inner footer-main-two__inner footer-main-three__inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="single-footer-widget  single-footer-widget-style2 ml55">
                    <div className="title">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2">
                      <ul className="clearfix">
                        <li>
                          <p>
                            <Link href="/">Home</Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="about">About Us</Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="web-development">Our Services</Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="contact">Contact Us</Link>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="single-footer-widget single-footer-widget-style2 ml50">
                    <div className="title">
                      <h3>Our Services</h3>
                    </div>
                    <div className="single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2">
                      <ul className="clearfix">
                        <li>
                          <p>
                            <Link href="uiux-design">UI/UX Development</Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="web-development">Web Development</Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="app-development">
                              Mobile App Development
                            </Link>
                          </p>
                        </li>
                        <li>
                          <p>
                            <Link href="digital-marketing">
                              Digital Marketing
                            </Link>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="single-footer-widget single-footer-widget-style2 ml50">
                    <div className="title">
                      <h3>Write</h3>
                    </div>
                    <div className="single-footer-widget-box single-footer-widget__links single-footer-widget__links-style2">
                      <ul className="clearfix">
                        <li className="socialIconFooter">
                          <p className="d-flex  align-items-center gap-3 cursor-pointer">
                            <span className="icon-facebook  border border-dark rounded-circle text-dark p-2"></span>
                            <a target="_blank" href="https://www.facebook.com/people/Ekanstech/100091184266839/">Facebook</a>
                          </p>
                        </li>
                        <li className="socialIconFooter">
                          <p className="d-flex  align-items-center gap-3">
                            <span className="fab fa-instagram border border-dark rounded-circle text-dark p-2"></span>
                            <a
                              target="_blank"
                              href="https://www.instagram.com/ekanstech/"
                            >
                              Instagram
                            </a>
                          </p>
                        </li>

                        <li className="socialIconFooter">
                          <p className="d-flex  align-items-center gap-3">
                            <span className="icon-linkedin border border-dark rounded-circle text-dark p-2"></span>
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/in/ekanstech-solutions-a73528310/?originalSubdomain=in"
                            >
                              Linkedin
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="single-footer-widget single-footer-widget-style2 ml50 me-3">
                    <div className="title">
                      <h3>Help & Support</h3>
                    </div>
                    <div className="single-footer-widget-box single-footer-widget__about single-footer-widget__about--2 p-0">
                      <ul className="clearfix">
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <p>
                            <Link
                              href="https://maps.app.goo.gl/Dh545u1x7F1pNWBJ7"
                              target="_blank"
                            >
                              238, Atlanta Mall, Sudama chock, Mota Varachha,
                              Surat - 394101
                            </Link>
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-mail-inbox-app"></span>
                          </div>
                          <p>
                            <Link href="mailto:ekanstechinfo@gmail.com">
                              ekanstechinfo@gmail.com
                            </Link>
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-phone-call"></span>
                          </div>
                          <p>
                            <Link href="tel:9714149838">+91 97141 49838</Link>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom footer-bottom-two footer-bottom-three">
            <div className="container">
              <div className="footer-bottom__inner footer-bottom__two-inner footer-bottom__three-inner">
                <div className="copyright-text text-center">
                  <p>
                    Copyright © 2024 Ekanstech by{" "}
                    <Link href="https://ekanstech.com">Ekanstech. </Link>
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
