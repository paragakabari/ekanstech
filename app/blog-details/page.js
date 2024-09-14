import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog Details">
                {/*Start Blog Details*/}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-details__content">
                                    <div className="blog-details__img-box1">
                                        <div className="blog-details__img1">
                                            <img src="assets/img/blog/blog-details__img1.jpg" alt="image"/>
                                        </div>
                                        <div className="blog-details-img1__content">
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
                                                <h2>
                                                    <Link href="#">Repair Will Be For You What You Part <br/> Want It To Be</Link>
                                                </h2>
                                            </div>
                                            <div className="text-box">
                                                <p>
                                                    Applications are like the lifeblood of mobile phones and tablets today. The
                                                    true potential of you mobile phone is harnessed by applications that can
                                                    provide utility. Apps come under of the various segments. Nowad technology
                                                    has become super advanced. Even normal people are getting themselves
                                                    enrolled in coding and programming and creating applications on their own.
                                                </p>
                                            </div>
                                            <div className="list-item">
                                                <ul>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Our services will feel like A mint of creativity.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>We develop applications with excellent technology.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>
                                                                A web communications practice for providing all application
                                                                problems.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="circle-box"></div>
                                                        <div className="text">
                                                            <p>Advancing beyond your expectations.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-details__img2-box">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="blog-details__img2-single">
                                                    <img src="assets/img/blog/blog-details__img2.jpg" alt="image"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="blog-details__img2-single">
                                                    <img src="assets/img/blog/blog-details__img3.jpg" alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details__img2-text">
                                            <h3><Link href="#">Repair For People Who Want More</Link></h3>
                                            <p>
                                                Several ways and will continue to do so. As a result, it is something that will
                                                never cease to halt. It’s an ever-growing business, which requires the help of
                                                proper slogans to make yourself and and application stand out from under a rock,
                                                lived an app named to do.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-details__text">
                                        <div className="text1">
                                            <div className="quote-box"></div>
                                            <p>“At vero eos et accusamus et iust odio dignissimos ducimus blanditiis
                                                praesentium voluptatum deleniti atque corrupti quos dol quamolestias
                                                excepturi sint occaecati cupiditate non provident”
                                            </p>
                                        </div>
                                        <div className="text2">
                                            <p>
                                                Authentic vexillologist thundercats, kale chips next level flannel activated
                                                charcoal keffiyeh single-origin coffee lo-fi swag stumptown marfa dreamcatcher.
                                                Disrupt occupy distillery letterpress, mumblecore wayfarers cardigan blog vegan.
                                                Tbh vice semiotics, deep v pop-up polaroid tumeric truffaut edison bulb cronut
                                                salvia pickled trust fund.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-details__tag-share">
                                        <div className="tag2">
                                            <div className="text">
                                                <p>Tag:</p>
                                            </div>
                                            <ul className="tag2-list">
                                                <li>
                                                    <Link href="#">Cleaning</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Repair</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Electrician</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="share-link">
                                            <div className="text">
                                                <p>Share:</p>
                                            </div>
                                            <ul className="share-link-list clearfix">
                                                <li>
                                                    <Link href="www.facebook.com">
                                                        <span className="icon-facebook"></span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="www.twitter.com" className="bg-color1">
                                                        <span className="icon-twitter"></span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="www.pinterest.com" className="bg-color2">
                                                        <span className="fa-brands fa-pinterest-p"></span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="www.linkedin.com" className="bg-color3">
                                                        <span className="icon-linkedin"></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="blog-details__prev-next-option">
                                        <div className="single-box left">
                                            <div className="icon">
                                                <Link href="#"><span className="icon-left-arrow"></span></Link>
                                            </div>
                                            <div className="text">
                                                <p>Prev Blog</p>
                                                <h3><Link href="#">We grow your business</Link></h3>
                                            </div>
                                        </div>
                                        <div className="single-box right">
                                            <div className="text">
                                                <p>Next Blog</p>
                                                <h3><Link href="#">Think beyond the wave</Link></h3>
                                            </div>
                                            <div className="icon">
                                                <Link href="#"><span className="icon-right-arrow-angle"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Start comment box*/}
                                    <div className="blog-details__comment-box">
                                        <div className="title">
                                            <h3>Comments (03)</h3>
                                        </div>

                                        {/*Start single comment*/}
                                        <div className="single-comment-box">
                                            <div className="img-holder">
                                                <img src="assets/img/blog/comments__img1.jpg" alt="Image"/>
                                            </div>
                                            <div className="text-holder">
                                                <div className="top">
                                                    <div className="text-box">
                                                        <h3>Jhonathon Smith</h3>
                                                        <p>Nov 12, 2022 at 12:12 am</p>
                                                    </div>
                                                    <div className="reply">
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End single comment*/}
                                        {/*Start single comment*/}
                                        <div className="single-comment-box ml105">
                                            <div className="img-holder">
                                                <img src="assets/img/blog/comments__img2.jpg" alt="Image"/>
                                            </div>
                                            <div className="text-holder">
                                                <div className="top">
                                                    <div className="text-box">
                                                        <h3>Daniel Shikhsa</h3>
                                                        <p>Nov 13, 2022 at 2:27 am</p>
                                                    </div>
                                                    <div className="reply">
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet this lacinia
                                                        nulla. Aliquam quis purus in justo pulvinar tempor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End single comment*/}
                                        {/*Start single comment*/}
                                        <div className="single-comment-box">
                                            <div className="img-holder">
                                                <img src="assets/img/blog/comments__img3.jpg" alt="Image"/>
                                            </div>
                                            <div className="text-holder">
                                                <div className="top">
                                                    <div className="text-box">
                                                        <h3>Endiria Vegaka</h3>
                                                        <p>Nov 13, 2022 at 3:27 am</p>
                                                    </div>
                                                    <div className="reply">
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia
                                                        nulla. Aliquam quis purus in justo pulvinar tempor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End single comment*/}
                                    </div>
                                    {/*End comment box*/}

                                    {/*Start add comment box*/}
                                    <div className="add-comment-box">
                                        <div className="title">
                                            <h3>Leave a Reply</h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                        </div>
                                        <form id="add-comment-form" action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-box">
                                                                    <input type="text" name="fname"
                                                                        placeholder="Your Name*"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-box">
                                                                    <input type="email" name="femail"
                                                                        placeholder="Email Address*"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div className="input-box">
                                                                    <textarea name="fcomments" placeholder="Comment"
                                                                        required=""></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="checked-box2">
                                                                
                                                            </div>
                                                            <div className="button-box">
                                                                <button className="thm-btn" type="submit">
                                                                    <span className="txt">
                                                                        Post Your Comment
                                                                    </span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End add comment box*/}


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
                                                <Link href="#"> Business Agency <span>(02)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> UI/UX Designer <span>(05)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Web Developer <span>(10)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Financial Strategy <span>(03)</span></Link>
                                            </li>
                                            <li>
                                                <div className="cercale-box"></div>
                                                <Link href="#"> Digital Marketing <span>(10)</span></Link>
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
                                            <li> <Link href="#">Design Studio</Link> </li>
                                            <li> <Link href="#">Web App</Link> </li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}
                                </div>
                            </div>
                            {/*End Sidebar*/}

                        </div>
                    </div>
                </section>
                {/*End Blog Details*/}

            </Layout>
        </>
    )
}