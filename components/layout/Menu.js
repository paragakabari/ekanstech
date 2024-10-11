"use client";

import {  useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Menu() {
  const url = usePathname();
  let newUrl = url.split("/")[1];
  const [isActive, setIsActive] = useState(newUrl);

  return (
    <ul className="navigation">
      <li className={isActive === "" ? "active" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={isActive === "career" ? "active" : ""}>
        <Link href="/career">Career</Link>
      </li>
      <li className={isActive === "case-studies" ? "active" : ""}>
        <Link href="/case-studies">Case Studies</Link>
      </li>
      <li className={isActive === "blog" ? "active" : ""}>
        <Link href="/blog">Blogs</Link>
      </li>
      <li className={isActive === "about" ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>
      <li
        className={`menu-item-has-children ${
          [
            "app-development",
            "uiux-design",
            "web-development",
            "digital-marketing",
          ].includes(isActive)
            ? "active"
            : ""
        }`}
      >
        <Link href="#">Services</Link>
        <ul className="sub-menu">
          <li>
            <Link href="/app-development">App Development</Link>
          </li>
          <li>
            <Link href="/uiux-design">Ui & Ux Design</Link>
          </li>
          <li>
            <Link href="/web-development">Web Development</Link>
          </li>
          <li>
            <Link href="/digital-marketing">Digital Marketing</Link>
          </li>
        </ul>
      </li>

      <li className={isActive === "contact" ? "active" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
