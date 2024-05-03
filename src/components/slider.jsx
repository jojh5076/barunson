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
        <div className="slider">
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index} className="slide" style={{ backgroundColor: 'white', border: 'none' , outline: 'none' }}>
                        <div className = {styles.image}>
                            <img src = {image.url} alt = {image.alt} />
                        </div>
                        <div className="carousel_pagination">
                            <div className="carousel_circle"></div>
                            <div className="carousel_circle"></div>
                            <div className="carousel_circle"></div>
                            <div className="carousel_circle"></div>
                            <div className="carousel_circle"></div>
                            <div className="carousel_circle"></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
