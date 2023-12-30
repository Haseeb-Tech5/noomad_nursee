import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Testimonials from "../Testimonials/Testimonials";
import Touch from "../Touch/Touch";
import "../nurses/nurses.css";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
// import Touch from "../Touch/Touch";
import Img from "../../Assetss/text.svg";
// import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img4 from "../../Assetss/Avatar1 (1).png";
import Img1 from "../../Assetss/Avatar2.png";
import Img2 from "../../Assetss/Avatar3.png";

export default function Practice() {
  const images = [
    { src: Img4, className: "avatar1" },
    { src: Img1, className: "avatar2" },
    { src: Img2, className: "avatar3" },
  ];
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

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const icons = [
    {
      img: "icon1.svg",
      title: "Cost-Effective",
      text: "Save time, cut paperwork, and enjoy competitive rates with our platform",
    },
    {
      img: "practice1.svg",
      title: "Efficiency",
      text: "Elevate your practice with us!",
    },
    {
      img: "icon3.svg",
      title: "Convenience",
      text: "Simplifies tasks, saves time through paperless transactions",
    },
    {
      img: "icon4.svg",
      title: "Reliability",
      text: "Constantly live app, diverse nurses: Unwavering reliability at your service",
    },
    {
      img: "practice2.svg",
      title: " Transparency",
      text: "Clear processes, fostering trust in every transaction",
    },
    {
      img: "practice3.svg",
      title: "Instantaneous Bookings",
      text: "Investing in your smile, our priority.",
    },
  ];
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
          <div style={{ width: "100%", overflow: "hidden" }}>
            <div className="nurses-video">
              <img src="practice.png" alt="" />
              <div className="nurses-video-cont">
                <div className="nurse-video-head">
                  <div className="nurses-flex">
                    <div className="nurses-img">
                      <p>Practices</p>
                      <img src="text.svg" alt="" />
                    </div>
                    <div className="nurses-buttons">
                      <button>Login</button>
                      <button>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nurses-icons-main">
              <div className="nurses-icons">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className={`icon-box ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "blur"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="image-box">
                      <img src={icon.img} alt="" />
                    </div>
                    <div className="title-box">
                      <p>{icon.title}</p>
                    </div>
                    <div className="text-box">
                      <p>{icon.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="nurse-testominal">
              <Testimonials />
            </div>
            <Register />
            <Touch />
          </div>
        </>
      )}
    </>
  );
}
