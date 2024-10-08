import { useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [isActive, setIsActive] = useState("");

    return (
        <ul className="navigation">
            <li className={isActive === "Home" ? "active" : ""} onClick={() => setIsActive("Home")}>
                <Link href="/">Home</Link>
            </li>
            <li className={isActive === "About" ? "active" : ""} onClick={() => setIsActive("About")}>
                <Link href="/about">About</Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="#">Services</Link>
                <ul className="sub-menu">
                    <li className={isActive === "App Development" ? "active" : ""} onClick={() => setIsActive("App Development")}>
                        <Link href="/app-development">App Development</Link>
                    </li>
                    <li className={isActive === "Ui & Ux Design" ? "active" : ""} onClick={() => setIsActive("Ui & Ux Design")}>
                        <Link href="/uiux-design">Ui & Ux Design</Link>
                    </li>
                    <li className={isActive === "Web Development" ? "active" : ""} onClick={() => setIsActive("Web Development")}>
                        <Link href="/web-development">Web Development</Link>
                    </li>
                    <li className={isActive === "Digital Marketing" ? "active" : ""} onClick={() => setIsActive("Digital Marketing")}>
                        <Link href="/digital-marketing">Digital Marketing</Link>
                    </li>
                </ul>
            </li>
            <li className={isActive === "Blog" ? "active" : ""} onClick={() => setIsActive("Blog")}>
                <Link href="/blog">Blog</Link>
            </li>
            <li className={isActive === "Contact" ? "active" : ""} onClick={() => setIsActive("Contact")}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
