import Navbar from "../Navbar/Navbar";
import video2 from "../about/about.mp4";
import Vector from "../../Assetss/text.svg";
import Touch from "../Touch/Touch";
import "./about.css";
import Testimonials from "../Testimonials/Testimonials";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Line from "../../Assetss/Line 91.png";
import Img from "../../Assetss/text.svg";

export default function About() {
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
  const [isLoading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <BounceLoader
            color="rgba(174, 156, 127, 0.607)"
            loading={isLoading}
            size={100}
          />
          <img src="tooth.png" alt="Tooth Image" className="centered-image" />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="video-container2">
            <video src={video2} autoPlay loop muted className="video" />
            <div className="video-heading-container2">
              <div className="about-head">
                <h2>Our Mission</h2>
                <img src={Vector} alt="" />
                <div className="about-para">
                  <p>Empowering dental staffing through seamless connections</p>
                </div>
              </div>
              <div className="story-container">
                <div className="width-container">
                  <div className="about-heading">
                    <h2>About us</h2>
                  </div>
                  <div className="about-img">
                    <img src={Vector} alt="" />
                  </div>
                  <div className="about-para2">
                    <p>
                      The inception of Nomad Nurses arose from our personal
                      experiences within the dental profession. We encountered
                      difficulties in booking and securing nurses, realising
                      that nurses lacked the means and access to practices
                      seeking locum professionals.
                    </p>
                  </div>
                  <div className="about-para2">
                    <p>
                      Through the creation of our ground-breaking app and
                      website, we successfully filled this void, facilitating
                      communication between locum nurses and dental practices to
                      minimise the disruption faced by dentists and patients.
                    </p>
                  </div>
                  <div className="about-para2">
                    <p>
                      As practicing dentists without a dedicated nurse, we
                      recognised the vital significance of this venture for the
                      dental industry. Our objective is to streamline the
                      process of booking dental nurses for practices, ensuring a
                      seamless experience and enabling nurses to find
                      opportunities with the touch of a button.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="video-button"></div>
          </div>

          <div className="flex" style={{ overflow: "hidden" }}>
            {/* <Testimonials /> */}
            <div className="testimonial-container">
              <div className="testi-full-container">
                <div
                  className="testi-heading"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <h2>Testimonials</h2>
                </div>
                <div
                  className="testi-img"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
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
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
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
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
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
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
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
              {/* <div className="line-contained3">
                <img src={Line} alt="" />
              </div> */}
            </div>
            <div style={{ marginTop: "-4%" }}>
              <Touch />
            </div>
          </div>
        </>
      )}
    </>
  );
}
