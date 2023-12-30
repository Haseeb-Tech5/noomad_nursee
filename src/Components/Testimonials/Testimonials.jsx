import React, { useState, useEffect } from "react";
import Img from "../../Assetss/text.svg";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Line from "../../Assetss/Line 91.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [slider, setSlider] = useState(null);
  const [activeArrow, setActiveArrow] = useState("next");

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
      setActiveArrow("next");
    }
  };

  const handlePrev = () => {
    if (slider) {
      slider.slickPrev();
      setActiveArrow("prev");
    }
  };

  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <div className="testimonial-container">
        <div className="testi-full-container">
          <div
            className="testi-heading"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h2>Testimonials</h2>
          </div>
          <div className="testi-img" data-aos="zoom-in" data-aos-duration="800">
            <img src={Img} alt="" />
          </div>
          <div
            className="testi-para"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <p>Hear how others have found the Nomad Nurse experience</p>
          </div>
          <div
            className="slider-container"
            // data-aos="zoom-in"
            // data-aos-duration="800"
          >
            <Slider ref={(c) => setSlider(c)} {...settings}>
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Yasmine</h3>
                </div>
                <div className="h5-heading">
                  <p>Locum dental nurse</p>
                </div>
                <div className="p-para">
                  <p>
                    The platform has given me access to a wide range of
                    opportunities, and the process of securing positions is
                    seamless. I appreciate the consistent support and the chance
                    to work with various dental practices
                  </p>
                </div>
              </div>{" "}
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Yasmine</h3>
                </div>
                <div className="h5-heading">
                  <p>Locum dental nurse</p>
                </div>
                <div className="p-para">
                  <p>
                    The platform has given me access to a wide range of
                    opportunities, and the process of securing positions is
                    seamless. I appreciate the consistent support and the chance
                    to work with various dental practices
                  </p>
                </div>
              </div>{" "}
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Yasmine</h3>
                </div>
                <div className="h5-heading">
                  <p>Locum dental nurse</p>
                </div>
                <div className="p-para">
                  <p>
                    The platform has given me access to a wide range of
                    opportunities, and the process of securing positions is
                    seamless. I appreciate the consistent support and the chance
                    to work with various dental practices
                  </p>
                </div>
              </div>{" "}
            </Slider>
            <div className="custom-arrows">
              <div
                className={`custom-arrow custom-prev ${
                  activeArrow === "prev" ? "active" : ""
                }`}
                onClick={handlePrev}
              >
                {">"}
              </div>
              <div
                className={`custom-arrow custom-next ${
                  activeArrow === "next" ? "active" : ""
                }`}
                onClick={handleNext}
              >
                {"<"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // alignSelf: "center",
          // width: "100%",
          // backgroundColor: "red",
        }}
      >
        <div className="line-contained">
          <img src={Line} alt="" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
