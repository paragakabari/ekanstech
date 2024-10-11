"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Link from "next/link";
import BoostSection from "../BoostSection/BoostSection ";

export default function Home() {
  const [isActive, setIsActive] = useState("All");

  const Project = [
    {
      id: 1,
      title: "React Js",
      category: "React Js",
      imageSrc: "/assets/img/react-banner-desk.png",
      imageAlt: "React Js",
    },
    {
      id: 2,
      title: "Angular Js",
      category: "Angular Js",
      imageSrc: "/assets/img/Angular.png",
      imageAlt: "Angular Js",
    },
    {
      id: 3,
      title: "Ekanstech",
      category: "Next Js",
      imageSrc: "/assets/img/project/Ekanstech.png",
      imageAlt: "Next Js",
    },
    {
      id: 4,
      title: "Node Js",
      category: "Node Js",
      imageSrc: "/assets/img/Node js.png",
      imageAlt: "Node Js",
    },
    {
      id: 5,
      title: "Python",
      category: "Python",
      imageSrc: "/assets/img/JavaScript.png",
      imageAlt: "Python",
    },
    {
      id: 6,
      title: "Flutter",
      category: "Flutter",
      imageSrc: "/assets/img/JavaScript.png",
      imageAlt: "Flutter",
    },
    // Add more job positions as needed
  ];

  const filteredProjects =
    isActive === "All"
      ? Project // Show all projects if "All" is selected
      : Project.filter((project) => project.category === isActive);

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="State Management in Flutter"
      bgImg="assets/img/blog/blog-page1__img1.png"
    >
      <div
        className="hero-section position-relative text-white d-flex align-items-center"
        style={{
          height: "100vh",
          background:
            "url('/assets/img/cas-study-bg.png') no-repeat center center/cover",
        }}
      >
        <div className="container text-center mt-5 pt-5">
          <h1 className="display-4  text-white  mt-5">
            Explore Our Team s Recent Success Stories
          </h1>
          <p className="lead mb-5 text-white">
            We deliver each project to remove difficulties and boost your sales
            200% better than before
          </p>
          <Link href="/contact" className="thm-btn btn-lg my-5">
            Contact Us <i className="fas fa-arrow-right"></i>
          </Link>

          <div className="row text-center justify-content-center">
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <h2 className="text-white">25+</h2>
              <p className=" text-white">Remarkable Projects</p>
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <h2 className="text-white">10+</h2>
              <p className=" text-white">Happy Clients</p>
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <h2 className="text-white">20+</h2>
              <p className=" text-white">Winning Awards</p>
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <h2 className="text-white">5+</h2>
              <p className=" text-white">Years Of Experiences</p>
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <h2 className="text-white">89%</h2>
              <p className=" text-white">Company Growth</p>
            </div>
          </div>
        </div>
        <div
          className="position-absolute support-center text-white"
          style={{ bottom: "20px", left: "10px" }}
        >
          <p className="mb-0 text-white">Support Center: +91 81603 62614</p>
        </div>
      </div>
      <section className="blog-page p-3">
        <div className="pt-5">
          <div className=" container mt-5">
            <div className="my-4 d-flex justify-content-center">
              <nav className={"nav justify-content-center categoryNav"}>
                <button
                  className={`nav-link fw-light ${isActive === "All" ? "active" : ""}`}
                  onClick={() => setIsActive("All")}
                >
                  All
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "React Js" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("React Js")}
                >
                  React Js
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "Next Js" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Next Js")}
                >
                  Next Js
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "Angular Js" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Angular Js")}
                >
                  Angular Js
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "Node Js" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Node Js")}
                >
                  Node Js
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "Flutter" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Flutter")}
                >
                  Flutter
                </button>
                <button
                  className={`nav-link fw-light ${
                    isActive === "Python" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Python")}
                >
                  Python
                </button>
              </nav>
            </div>

            {/* Projects Section */}
            <section className="career-page">
              <div className="career-page__positions pt-5">
                <Container>
                  <h2 className="positions-title text-center h3 mb-4">
                    {isActive}
                  </h2>
                  <Row className="justify-content-center">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((position) => (
                        <Col
                          md={4}
                          className="mb-4 text-center"
                          key={position.id}
                        >
                          <div
                            className="position-card d-inline-block"
                            style={{ height: "300px" }}
                          >
                            <Image
                              src={position.imageSrc}
                              alt={position.imageAlt}
                              width={300}
                              height={200}
                              className="position-image"
                            />
                            <h4 className="position-title">{position.title}</h4>
                          </div>
                        </Col>
                      ))
                    ) : (
                      <p className="text-center">
                        No any Projects for {isActive}
                      </p>
                    )}
                  </Row>
                </Container>
              </div>
            </section>

            <div className="pt-5 mt-5">
              <BoostSection />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
