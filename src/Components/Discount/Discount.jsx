import React, { useEffect } from "react";
import "./Discount.css";
import Video1 from "../Discount/video.mp4";
import Tooth from "../../Assetss/tooth.png";
const Data = [
  { animation: "fadeInFromLeft", text: "Efficiency" },
  { animation: "fadeOutToRight", text: "Efficiency" },
  { animation: "fadeInFromRight", text: "Convenience" },
  { animation: "fadeOutToBottom", text: "Convenience" },
  { animation: "fadeInFromBottom", text: "Reliability" },
  { animation: "fadeOutToTop", text: "Reliability" },
  { animation: "fadeInFromTop", text: "Flexibility" },
  { animation: "fadeOutToLeft", text: "Flexibility" },
  { animation: "fadeInFromLeft", text: "Transparency" },
  { animation: "fadeOutToBottom", text: "Transparency" },
  { animation: "fadeInFromBottom", text: "Instantaneous Bookings" },
  { animation: "fadeOutToRight", text: "Instantaneous Bookings" },
];

const Discount = () => {
  const [counter, setCounter] = React.useState(0);
  const [data, setData] = React.useState(Data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Data.length);
    }, 1500);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    setData(Data[counter]);
  }, [counter]);
  return (
    <div className="discount-container">
      <video src={Video1} autoPlay loop muted className="back-video" />
      <div
        className="flex-width"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="discount-container-full">
          <div className="left-discount">
            <p className={data.animation}>{data.text}</p>
          </div>
          <div
            className="nurse-left"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="nurse-logo">
              <img src={Tooth} alt="" />
            </div>
            <div className="nurse-heading">
              <h2>
                Why <span style={{ color: "#497367" }}>Practices</span> should
                join us!
              </h2>
            </div>
            <div className="nurse-para2">
              <p>
                At Nomad Nurse, we invite dental practices to elevate their
                staffing experience by joining our dynamic platform. We
                understand the pivotal role that a skilled dental nurse plays in
                ensuring the smooth functioning of a practice. Our user-friendly
                interface streamlines the recruitment process, allowing you to
                find the perfect match quickly and efficiently. Join us in
                transforming the way you staff your practice and experience the
                convenience of finding the right dental nurse with ease
              </p>
            </div>

            <div className="nurse-button">
              <button>Join now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
