import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageData from "../images/iamgeData";

const SliderComponent = () => {

    const settings = {
        dots: true,
        dotsClass: 'dots_custom',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true, // 드래그 기능 활성화
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index} className={styles.slide} style={{ backgroundColor: 'white', border: 'none', outline: 'none', position: 'relative' }}>
                        <div className={styles.image}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                                <img src={image.url} alt={image.alt}/>
                                <div className={styles.carousel_pagination}>
                                    <div className={styles.carousel_circle}></div>
                                    <div className={styles.carousel_circle}></div>
                                    <div className={styles.carousel_circle}></div>
                                    <div className={styles.carousel_circle}></div>
                                    <div className={styles.carousel_circle}></div>
                                    <div className={styles.carousel_circle}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
