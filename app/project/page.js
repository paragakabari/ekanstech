
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Project">
               
                {/*Project Page Start*/}
                <section className="project-page">
                    <div className="container">
                        <div className="row">
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-1.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-2.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-3.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-4.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-5.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                            {/*Project Page Single Start*/}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="project-page__single">
                                    <div className="project-page__img-box">
                                        <div className="project-page__img">
                                            <img src="assets/images/project/project-page-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="project-page__content">
                                            <h3 className="project-page__title"><Link href="project-details">Las vegas Project</Link>
                                            </h3>
                                            <Link href="assets/images/project/project-page-1-6.jpg" className="
                                                project-page__plus img-popup"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Project Page Single End*/}
                        </div>
                    </div>
                </section>
                {/*Project Page End*/}


                {/*CTA One Start */}
                <section className="cta-one">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"  style={{ backgroundImage: 'url(assets/images/backgrounds/cta-one-bg.jpg)' }} >
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6"></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="cta-one__right">
                                        <h3 className="cta-one__title">Get Free Estimate</h3>
                                        <p className="cta-one__text">Lorem Ipsum is simply is dumiomy is text Lorem Ipsum </p>
                                        <form className="cta-one__form mc-form" data-url="MC_FORM_URL">
                                            <div className="cta-one__form-input-box">
                                                <input type="email" placeholder="Your email..." name="email"/>
                                                <button type="submit" className="cta-one__btn thm-btn">Login<span
                                                        className="icon-plus"></span></button>
                                            </div>
                                        </form>
                                        <div className="mc-form__response"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA One End */}
            </Layout>
        </>
    )
}