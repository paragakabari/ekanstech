
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog">
                {/*Start Blog Page*/}
                <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-page__content">
                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img1.jpg" alt="image"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-user"></span>
                                                        </div>
                                                        <p><Link href="#">Admin</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-calendar"></span>
                                                        </div>
                                                        <p><Link href="#">Oct 14, 2022</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-comment"></span>
                                                        </div>
                                                        <p><Link href="#">0 Comments</Link></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Communicate The Message Your Audience is
                                                        <br/>Waiting for Products
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img2.jpg" alt="image"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-user"></span>
                                                        </div>
                                                        <p><Link href="#">Admin</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-calendar"></span>
                                                        </div>
                                                        <p><Link href="#">Oct 14, 2022</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-comment"></span>
                                                        </div>
                                                        <p><Link href="#">0 Comments</Link></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Digital Marketing is The Backbone of
                                                        Your<br/>Business Growth
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img3.jpg" alt="image"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-user"></span>
                                                        </div>
                                                        <p><Link href="#">Admin</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-calendar"></span>
                                                        </div>
                                                        <p><Link href="#">Oct 14, 2022</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-comment"></span>
                                                        </div>
                                                        <p><Link href="#">0 Comments</Link></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Our Mission is to Help The Entire World
                                                        Do<br/>Business Online
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}

                                    {/*Start Single Blog Page*/}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <img src="assets/img/blog/blog-page1__img4.jpg" alt="image"/>
                                        </div>
                                        <div className="blog-page__single-content">
                                            <div className="meta-box">
                                                <ul className="meta-info">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-user"></span>
                                                        </div>
                                                        <p><Link href="#">Admin</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-calendar"></span>
                                                        </div>
                                                        <p><Link href="#">Oct 14, 2022</Link></p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-comment"></span>
                                                        </div>
                                                        <p><Link href="#">0 Comments</Link></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="blog-details">Making Your Business A Success with Cutting
                                                        <br/>Edge Technology
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="blog-details">
                                                    Read More
                                                    <i className="icon-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Blog Page*/}
                                </div>
                            </div>

                            {/*Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="blog-page__sidebar">
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here..."/>
                                            <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__latest-blog wow fadeInUp" data-wow-delay=".4s">
                                        <div className="title-box">
                                            <h2>Latest From Blog</h2>
                                        </div>

                                        <ul className="sidebar__latest-blog-list">
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img1.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Powerful Ideas & Sales<br/>Acceleration</Link></h4>
                                                    <p><span className="icon-calendar"></span> September 10, 2022</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img2.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Craft Digital Marketing<br/>That Converts</Link></h4>
                                                    <p><span className="icon-calendar"></span> December 12, 2022</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/img/blog/blog-page1-sideber__img3.jpg" alt=""/>
                                                </div>
                                                <div className="content-box">
                                                    <h4><Link href="#">Start with A Plan and<br/>Finish with Results.</Link></h4>
                                                    <p><span className="icon-calendar"></span> November 08, 2022</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".3s">
                                        <div className="title-box">
                                            <h2>Categories</h2>
                                        </div>

                                        <ul className="sidebar__category-list">
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Business Agency <span>(8)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> UI/UX Designer <span>(12)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Web Developer <span>(20)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Financial Strategy <span>(15)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Digital Marketing <span>(9)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Corporate Agency <span>(12)</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".5s">
                                        <div className="title-box">
                                            <h2>Popular Tags</h2>
                                        </div>

                                        <ul className="sidebar__tags-list clearfix">
                                            <li> <Link href="#">Design</Link> </li>
                                            <li> <Link href="#">Development</Link> </li>
                                            <li> <Link href="#">Agency</Link> </li>
                                            <li> <Link href="#">UI/UX</Link> </li>
                                            <li> <Link href="#">Marketing</Link> </li>
                                            <li> <Link href="#">Business</Link> </li>
                                            <li> <Link href="#">Financial</Link> </li>
                                            <li> <Link href="#">App UI</Link> </li>
                                            <li> <Link href="#">Corporate</Link> </li>
                                            <li> <Link href="#">Design Studio</Link> </li>
                                            <li> <Link href="#">Web App</Link> </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}
                                </div>
                            </div>
                            {/*End Sidebar*/}

                        </div>
                        <ul className="styled-pagination text-center clearfix">
                            <li><Link href="#">1</Link></li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#">3</Link></li>
                            <li><Link href="#">4</Link></li>
                            <li>
                                <Link href="#"><span className="icon-right-arrow-angle right"></span></Link>
                            </li>
                        </ul>
                    </div>
                </section>
                {/*End Blog Three*/}

            </Layout>
        </>
    )
}