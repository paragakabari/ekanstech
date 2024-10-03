"use client"
import Link from "next/link"
import { useState } from "react"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()
    const [isActive , setIsActive]=useState("Home")


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

       
            <ul className="navigation">
                <li className={isActive === "Home" && "active"}>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="app-development">App Development</Link></li>
                        <li><Link href="uiux-design">Ui & Ux Design</Link></li>
                        <li><Link href="web-development">Web Development</Link></li>
                        <li><Link href="digital-marketing">Digital Marketing</Link></li>
                        
                    </ul>
                </li>
                <li>
                    <Link href="blog">Blog</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
