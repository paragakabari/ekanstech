import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

// Sample job positions array
const jobPositions = [
  {
    id: 1,
    title: "React Js Developer",
    openPositions: 1,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/react-banner-desk.png",
    imageAlt: "React Js Developer",
  },
  {
    id: 2,
    title: "Angular Js Developer",
    openPositions: 2,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/Angular.png",
    imageAlt: "Angular Js Developer",
  },
  {
    id: 3,
    title: "Next Js Developer",
    openPositions: 1,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/Next Js.png",
    imageAlt: "Node Js Developer",
  },
  {
    id: 4,
    title: "Vue Js Developer",
    openPositions: "1 Intern" ,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/vue js.png",
    imageAlt: "Vue Js Developer",
  },
  {
    id: 5,
    title: "Node Js Developer",
    openPositions: 2,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/Node js.png",
    imageAlt: "Node Js Developer",
  },
  {
    id: 6,
    title: "JavaScript Developer",
    openPositions: 1,
    description: "Build and maintain modern applications, and work with a team of professionals.",
    imageSrc: "/assets/img/JavaScript.png",
    imageAlt: "JavaScript Developer",
  },
  // Add more job positions as needed
];

export default function Career() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Career"
        bgImg="assets/img/career.png"
      >
        {/* Start Career Page */}
        <section className="careers-section">
          <div className="container">
            <div className="row text-center my-5">
              <div className="col-12">
                <h2 className="section1-title ">We Offer Careers, Not Jobs</h2>
                <p className="section-text ">
                  Becoming a part of Ekanstech Solution could mark a significant turning point in your life, offering numerous benefits along the way. It's a second home where teamwork is prioritized to achieve our shared objective – continuous evolution with cutting-edge technologies while ensuring the well-being of our most treasured resources, our employees. Embrace the 'Positive Vibes' and the significance of maintaining a healthy 'Work-life Harmony' by collaborating with us.
                </p>
              </div>
            </div>
            <div className="row">

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/carreer1.png"
                    alt="Image 2"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/About Bg.png"
                    alt="Image 1"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/career2.png"
                    alt="Image 3"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/career5.png"
                    alt="Image 6"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/career3.png"
                    alt="Image 4"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="image-container">
                  <img
                    src="/assets/img/career4.png"
                    alt="Image 5"
                    className="img-fluid image-item"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="about-com-section ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="circle-container">
              <div className="circle">
                <p>Competitive salary packages</p>
              </div>
              <div className="circle">
                <p>Friendly Environment</p>
              </div>
              <div className="circle">
                <p>On-time Salary</p>
              </div>
              <div className="circle">
                <p>Personal Career Growth</p>
              </div>
              <div className="circle">
                <p>Career Growth Opportunity</p>
              </div>
              <div className="circle">
                <p>Healthy Food & Snacks</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="about-com-title">Here at Ekanstech</h2>
            <p className="about-com-text">
              We distinguish ourselves by embracing a culture of innovation and open recognition for exceptional ideas. We highly value the voices of our employees, understanding that their perspectives are vital to our growth. With a global footprint, we invite you to seize the opportunity to collaborate with us. Come be a part of our team and pave the way for your career to reach unprecedented heights.
            </p>
          </div>
        </div>
      </div>
    </section> */}

        <section className="about-ekanstech">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-4">
                <h2 className="section-title"><span className="highlight">Unlock </span>Your Potential with Ekanstech Solution</h2>
                <p className="section-intro">
                  At <strong >Ekanstech Solution,</strong> we are not just offering jobs—we are creating careers. Our culture is built on innovation, creativity, and a relentless drive for excellence. We believe in recognizing and rewarding exceptional ideas from every team member, ensuring that your voice is heard and valued.
                </p>
              </div>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <p className="section-text">
                  Joining our team means being part of a global network, where your perspective and skills contribute to our continuous growth and success. Whether you’re an experienced professional or just starting your journey, we provide the resources, mentorship, and opportunities for advancement that will help you thrive.
                </p>
              </div>
            </div>

            <div className="row text-center mb-5">
              <div className="col-md-4 p-4">
                <i className="fas fa-dollar-sign fa-3x mb-3" style={{color:"#68cbf4"}} ></i>
                <h4>Competitive Salary</h4>
                <p>Recognizing your hard work and dedication with attractive salary packages.</p>
              </div>
              <div className="col-md-4 p-4">
                <i className="fas fa-handshake fa-3x mb-3" style={{color:"#68cbf4"}}></i>
                <h4>Friendly Environment</h4>
                <p>A collaborative atmosphere that fosters creativity and teamwork.</p>
              </div>
              <div className="col-md-4 p-4">
                <i className="fas fa-clock fa-3x mb-3" style={{color:"#68cbf4"}}></i>
                <h4>On-Time Salary & Benefits</h4>
                <p>Supporting your growth with timely salary and benefits that enhance your personal and professional life.</p>
              </div>
              <div className="col-md-4 p-4">
                <i className="fas fa-graduation-cap fa-3x mb-3" style={{color:"#68cbf4"}}></i>
                <h4>Career Development</h4>
                <p>Access to career development programs and leadership opportunities.</p>
              </div>
              <div className="col-md-4 p-4">
                <i className="fas fa-users fa-3x mb-3" style={{color:"#68cbf4"}}></i>
                <h4>Global Team</h4>
                <p>Be part of a growing team with global exposure and opportunities for collaboration.</p>
              </div>
              <div className="col-md-4 p-4">
                <i className="fas fa-balance-scale fa-3x mb-3" style={{color:"#68cbf4"}}></i>
                <h4>Work-Life Balance</h4>
                <p>Enjoy a healthy balance between your professional life and personal well-being.</p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-12">
                <h3 className="pt-4">Take this chance to be part of something bigger.</h3>
                <p className="final-call">
                  Grow your career, innovate alongside a talented team, and take the first step toward unprecedented heights. At Ekanstech Solution, we empower you to shape your future while helping shape ours.
                </p>
              </div>
            </div>
          </div>
        </section>



        <section className="career-page rounded-5">
          <div className="career-page__positions">
            <Container>
              <h2 className="positions-title text-center mb-4">
                We’re Currently Hiring
              </h2>
              <Row>
                {jobPositions.map((position) => (
                  <Col md={4} className="mb-4" key={position.id}>
                    <div className="position-card">
                      <Image
                        src={position.imageSrc}
                        alt={position.imageAlt}
                        width={300}
                        height={200}
                        className="position-image"
                      />
                      <h4 className="position-title">{position.title}</h4>
                      <p className="Position">
                        Open Position : ({position.openPositions})
                      </p>
                      <p className="position-description">
                        {position.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </section>


        {/* End Career Page */}
      </Layout>
    </>
  );
}
