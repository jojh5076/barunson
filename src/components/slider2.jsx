import React from "react";
import Slider from "react-slick";
import styles from "./slider2.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageData from "../images/imageData2";

const SliderComponent = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true, // 드래그 기능 활성화
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className={styles.slider2}>
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <div className={styles.image}>
                                <img src={image.url} alt={image.alt} />
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
