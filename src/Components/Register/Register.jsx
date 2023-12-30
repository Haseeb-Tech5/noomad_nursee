import React, { useEffect } from "react";
import "./Register.css";
import Img from "../../Assetss/Avatar1 (1).png";
import Img1 from "../../Assetss/Avatar2.png";
import Img2 from "../../Assetss/Avatar3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);
  const images = [
    { src: Img, className: "avatar1" },
    { src: Img1, className: "avatar2" },
    { src: Img2, className: "avatar3" },
  ];

  return (
    <div
      className="register-container"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="whole-contained">
        <div className="images-contained">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt=""
              className={image.className}
            />
          ))}
        </div>
        <div className="header1">
          <h2>Register and be the first to find out when we launch!</h2>
        </div>
        <div className="button-contained">
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
