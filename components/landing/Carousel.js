'use client'
import { useEffect } from "react"
import Image from "next/image"
import styles from "./carousel.module.css"

export default function Carousel() {

    useEffect(() => {
        // prevent viewport jumping
        document.querySelectorAll('[title="Prev"], [title="Next"]').forEach(function(bullet) {
            bullet.addEventListener('click', cancelScrollTop);
        })
    }, [])
    
    function cancelScrollTop(e){
        
        const currentPos = window.scrollY;
        const destination = document.querySelector(e.target.getAttribute('href'));
        
        e.preventDefault();

        window.scrollTo(0, currentPos);
        document.querySelector('[title="Slides"]').scrollTo(destination.offsetLeft, 0);
    }
    
    return(
        <div className={styles.sliderContainer}>
            <h2 className={styles.sliderTitle}>Feedbacks from business</h2>
            <div className={styles.slider}>
                <div className={styles.slides} title="Slides">
                    <div id="slides__1" className={styles.slide}>
                        <div className={styles.slide__feedback__wrapper}>
                            <span className={styles.slide__feedback__text}>"Codeinterns transformed our hiring strategy. It provides us direct access to global IT talents - truly unparalleled."</span>
                            <div className={styles.slide__author__wrapper}>
                                <Image
                                    className={styles.slide__author__photo}
                                    src={'/landing/feedback-photos/alice.jpg'}
                                    width={40}
                                    height={40}
                                ></Image>
                                <span className={styles.slide__author__details}>Alice Suzuki, FutureTech Co., Tokyo</span>
                            </div>
                        </div>
                        <a className={styles.slide__prev} href="#slides__4" title="Next"></a>
                        <a className={styles.slide__next} href="#slides__2" title="Next"></a>
                    </div>
                    <div id="slides__2" className={styles.slide}>
                        <div className={styles.slide__feedback__wrapper}>
                                <span className={styles.slide__feedback__text}>"A hiring game-changer. Connected us to a wide array of quality tech professionals globally."</span>
                                <div className={styles.slide__author__wrapper}>
                                    <Image
                                        className={styles.slide__author__photo}
                                        src={'/landing/feedback-photos/stefan.jpg'}
                                        width={40}
                                        height={40}
                                    ></Image>
                                    <span className={styles.slide__author__details}>Stefan Müller, Innovative Solutions AG, Berlin</span>
                                </div>
                            </div>
                            <a className={styles.slide__prev} href="#slides__1" title="Prev"></a>
                            <a className={styles.slide__next} href="#slides__3" title="Next"></a>
                        </div>
                    <div id="slides__3" className={styles.slide}>
                        <div className={styles.slide__feedback__wrapper}>
                            <span className={styles.slide__feedback__text}>"Struggling to find IT professionals? Look no further. The platform has been a goldmine for us."</span>
                            <div className={styles.slide__author__wrapper}>
                                <Image
                                    className={styles.slide__author__photo}
                                    src={'/landing/feedback-photos/maria.jpg'}
                                    width={40}
                                    height={40}
                                ></Image>
                                <span className={styles.slide__author__details}>María Rodríguez, CodeBox SL., Madrid</span>
                            </div>
                        </div>
                        <a className={styles.slide__prev} href="#slides__2" title="Prev"></a>
                        <a className={styles.slide__next} href="#slides__4" title="Next"></a>
                    </div>
                    <div id="slides__4" className={styles.slide}>
                        <div className={styles.slide__feedback__wrapper}>
                            <span className={styles.slide__feedback__text}>"This platform landed me the perfect position. For tech experts seeking global opportunities, it's a dream."</span>
                            <div className={styles.slide__author__wrapper}>
                                <Image
                                    className={styles.slide__author__photo}
                                    src={'/landing/feedback-photos/amit.jpg'}
                                    width={40}
                                    height={40}
                                ></Image>
                                <span className={styles.slide__author__details}>Amit Patel, Full-stack Developer, Mumbai</span>
                            </div>
                        </div>
                        <a className={styles.slide__prev} href="#slides__3" title="Prev"></a>
                        <a className={styles.slide__next} href="#slides__1" title="Prev"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}