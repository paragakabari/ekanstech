// components/BoostSection.js
import Image from 'next/image';
import React from 'react';
import styles from './BoostSection.module.scss'; // Correct import for CSS Module
import Link from 'next/link';

const BoostSection = () => {
    return (
        <>
            <section className={styles['boost-section']} style={{borderRadius:"24px"}}>

                <div className={styles['boost-content']}>
                    <h2 className='text-white'>Ready to boost your business?</h2>
                    <p className='text-white'>
                        Get in touch with us for expert solutions with the best team at
                        <br />Ekanstech Solution.
                    </p>
                    <Link href={"/contact"} className={styles['contact-btn']}>
                        Contact Now <span className={styles['arrow']}>→</span>
                    </Link>
                </div>
                <div className={styles['boost-image']}>
                    <Image
                        src="/assets/img/ani-removebg-preview.png"
                        alt="Business Illustration"
                        width={300}
                        height={300}
                    />

                </div>

            </section>

            {/* <section className="cta-two testmonials">
                <div className="container">
                    <div className="cta-two__inner">
                        <div className="cta-two__inner-bg"
                            style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                        <div className="cta-two__content sec-title-animation animation-style1">
                            <h2>Have Any Discussion?</h2>
                            <p>Gathered have greater made fruitful. Void to let to know
                                about that you ll sixth upon day.</p>
                        </div>
                        <div className="cta-two__btn">
                            <Link className="thm-btn" href="#">
                                <span className="txt">Contact with Us</span>
                                <i className="icon-next"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default BoostSection;
