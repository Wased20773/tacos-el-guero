import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/AboutUs.css";

import ChefPhotopng from "../assets/imgs/chef-template-photo.png"
import ChefAssistantPhotojpg from "../assets/imgs/chef-assistant-template-photo.jpg"

import CardCarouselOnejpg from "../assets/imgs/tacos-el-guero-nine-years-ago.jpg"
import CardCarouselTwojpg from "../assets/imgs/tacos-el-guero-four-years-ago.jpg"
import CardCarouselThreejpg from "../assets/imgs/tacos-el-guero-four-years-ago-inside.jpg"

const CardCarousel = [
  {
    img: CardCarouselOnejpg,
    h2: "2011",
    text: "Getting a new truck for the business",
  },
  {
    img: CardCarouselTwojpg,
    h2: "2021",
    text: "Made home for customers to eat indoors in harsh weathers",
  },
  {
    img: CardCarouselThreejpg,
    h2: "2021",
    text: "Inside view of the built home",
  },
];

function AboutUs() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <>
      <div className="about-us-container">
        <div>About Us</div>

        {/* About Chef*/}
        <div className="about-me-card">
          <img
            className="about-me-image-left"
            src={ChefPhotopng}
            alt="chef looking at camera smiling with glass wines infront of shot"
            width={"300px"}
          />
          <div className="about-me-article-container">
            <article className="about-me-article-text">
              My name is Payo, but you can call me el Guero. I started my
              business over 10 years ago. I am passionate about making amazing
              traditional mexican food the right way. come by my taco truck to
              get a taste of my foods!
            </article>
          </div>
        </div>

        {/* About Chef Assistant */}
        <div className="about-me-card">
          <div className="about-me-article-container">
            <article className="about-me-article-text">
              Hello, my name is Araceli! I am the assistant of el Guero, who is
              also my husband. I help him work with him everyday I can to
              support our business. We love making smiles on peoples faces.
              Seeing new faces makes me and my husband very proud! We invite
              anyone to come and taste our Mexican food, made with love.
            </article>
          </div>
          <img
            className="about-me-image-right"
            src={ChefAssistantPhotojpg}
            alt="chef assistant looking at camera smiling with her arms holding each other near her chest"
            width={"300px"}
          />
        </div>

        <div className="about-me-content-seperator">...</div>

        {/* What was it like before 2016 - 2025 */}
        <div className="about-me-history-carousel-container">
          <div
            className="carousel-left-button"
            onClick={() => {
              setCarouselIndex(
                (prev) => (prev - 1 + CardCarousel.length) % CardCarousel.length
              );
            }}
          >
            <div className="left-button"></div>
          </div>
          <div className="about-me-history-carousel-images">
            <div
              className="carousel-image-strip"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {CardCarousel.map((slide, index) => (
                <img
                  key={index}
                  className="carousel-image"
                  src={slide.img}
                  alt={`carousel image ${index}`}
                  width={"900"}
                  height={"500"}
                />
              ))}
            </div>
          </div>
          <div className="about-me-history-cover"></div>
          <div className="about-me-history-text-wrapper">
            <div
              className="about-me-history-text-strip"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {CardCarousel.map((slide, index) => (
                <div key={index} className="about-me-history-text-container">
                  <div className="about-me-history-text-h2">{slide.h2}</div>
                  <div className="about-me-history-text">{slide.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="carousel-right-button"
            onClick={() => {
              setCarouselIndex((prev) => (prev + 1) % CardCarousel.length);
            }}
          >
            <div className="right-button"></div>
          </div>

          <div className="about-me-image-index-group">
            {CardCarousel.map((_, index) => (
              <div
                key={index}
                className={`about-me-image-index-dot ${
                  carouselIndex === index ? "active" : ""
                }`}
                onClick={() => setCarouselIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
