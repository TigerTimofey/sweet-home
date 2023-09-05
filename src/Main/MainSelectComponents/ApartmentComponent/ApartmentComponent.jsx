import React from "react";
import Carousel from "react-bootstrap/Carousel";

import firstImage from "./ApartmentImages/1.png";
import secondImage from "./ApartmentImages/2.png";
import thirdImage from "./ApartmentImages/3.png";
import fourthImage from "./ApartmentImages/4.png";
import fifthImage from "./ApartmentImages/5.png";
import sixthImage from "./ApartmentImages/6.png";
import seventhImage from "./ApartmentImages/7.png";
import eighthImage from "./ApartmentImages/8.png";
import tenthImage from "./ApartmentImages/10.png";
import eleventhImage from "./ApartmentImages/11.png";
import twelfthImage from "./ApartmentImages/12.png";
import ApartmentMap from "./ApartmentMap";

const imageArray = [
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  seventhImage,
  eighthImage,
  tenthImage,
  eleventhImage,
  twelfthImage,
];

function ApartmentComponent() {
  const watchOnBnb = () =>
    window.open(
      "https://www.airbnb.com/rooms/622167152312826075?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget",
      "_blank"
    );

  return (
    <>
      <Carousel fade>
        {imageArray.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={index} className="pictures-container" />
            <Carousel.Caption>
              <button
                className="pressable-button-apartment"
                onClick={watchOnBnb}
              >
                See on AirBnb
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <ApartmentMap />
    </>
  );
}

export default ApartmentComponent;
