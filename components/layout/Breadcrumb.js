import Link from "next/link";
import { JackInTheBox } from "react-awesome-reveal";

export default function Breadcrumb({ breadcrumbTitle, bgImg }) {
  return (
    <>
      {/*Start Page Header*/}
      <section className="page-header">
        <div className="shape1 rotate-me">
          <img src={bgImg} alt="" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <JackInTheBox>
              <h2>{breadcrumbTitle}</h2>
            </JackInTheBox>
            {/* <ul className="thm-breadcrumb">
                        <li><Link href="/"><span className="fa fa-home"></span> Home</Link></li>
                        <li><i className="icon-right-arrow-angle"></i></li>
                        <li className="color-base">{breadcrumbTitle}</li>
                    </ul> */}
          </div>
        </div>
      </section>
      {/*End Page Header*/}
    </>
  );
}
