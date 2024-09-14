"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Start Mobile Menu  */}
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img
                src="assets/img/resource/footer-one-1.png"
                alt="Logo"
                className="w-75"
              />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              <li
                className={isActive.key == 1 ? "dropdown current" : "dropdown"}
              >
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about/">About</Link>
              </li>
              <li
                className={isActive.key == 2 ? "dropdown current" : "dropdown"}
              >
                <Link href="/#">Services</Link>
                <ul
                  style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="app-development">App Development</Link>
                  </li>
                  <li>
                    <Link href="uiux-design">Ui & Ux Design</Link>
                  </li>
                  <li>
                    <Link href="web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link href="digital-marketing">Digital Marketing</Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-phone-call"></span>
            </div>
            <p>
              <Link href="tel:8160362614">+91 81603 62614</Link>
            </p>
          </div>
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/people/Ekanstech/100091184266839/"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/ekanstech/"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
      {/* End Mobile Menu */}
    </>
  );
};
export default MobileMenu;
