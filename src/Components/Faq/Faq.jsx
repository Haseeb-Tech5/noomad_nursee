import React from "react";
import Navbar from "../Navbar/Navbar";
import Vector3 from "../../Assetss/Vector (3).png";
import Touch from "../Touch/Touch";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="terms-main">
        <div className="terms-head1">
          {" "}
          <p>FAQ's</p>
          <img src={Vector3} alt="" />
        </div>
        <div className="terms-para">
          {" "}
          <p>The proposed design style/theme would be something like this: </p>
          <p>
            You can place whatever you think will be nice etc like images
            symbols etc etc  
          </p>{" "}
          <p>
            I think it would be good to have two different sections one for
            nurses and the other practices regarding the list so people can
            select at the top.
          </p>{" "}
          <p>
            Answer only shows when user clicks. Currently no answers so put some
            lorem ipsum text in pls
          </p>
          <h3>1. FOR NURSES:</h3>
          <ul>
            <li>1. How can I sign up and create a profile on your platform?</li>
            <li>
              2. What types of locum positions are available for dental nurses
              on your platform? 
            </li>
            <li>3. Is there a fee for dental nurses to use your platform? </li>
            <li>
              4. How quickly can I find locum positions through your platform? 
            </li>
            <li>5. What documents should I upload to register?  </li>
            <li>
              6. Can I book multiple locum positions simultaneously on your
              platform?{" "}
            </li>
            <li>
              7. Is there a review or rating system for dental nurses on your
              platform? 
            </li>
            <li>
              8. Can I specify my availability and preferences for locum
              positions on your platform? 
            </li>
            <li>9. Can I view my upcoming/past locum work </li>
            <li>
              10. What benefits does your platform offer to dental nurses? 
            </li>
            <li>
              11. Can I communicate directly with dental practices through your
              platform? 
            </li>
            <li>
              12. Is my personal information kept private and secure on your
              platform? 
            </li>
            <li>
              13. How do I receive notifications about new locum opportunities
              on your platform? 
            </li>
            <li>
              14. What types of dental practices use your platform to find locum
              nurses? 
            </li>
            <li>
              15. Is there customer support available for dental nurses using
              your platform? 
            </li>
            <li>
              16. Can I leave feedback or reviews for dental practices I work
              with through your platform? (for only us to review - internal) 
            </li>
            <li>17. What happens if I need to amend/cancel my booking?  </li>
            <li>
              18. How do I get started with finding locum positions on your
              platform? 
            </li>
          </ul>
          <h3>2. FOR PRACTICES:</h3>
          <ul>
            <li>1. How does your platform work for dental practices?</li>
            <li>
              2. What benefits does your platform offer to dental practices? 
            </li>
            <li>
              3. How can dental practices find locum dental nurses using your
              platform? 
            </li>
            <li>
              4. Is there a cost for dental practices to use your platform? 
            </li>
            <li>
              5. What makes your platform different from other dental staffing
              solutions? 
            </li>
            <li>
              6. Can I post multiple job listings for different positions on
              your platform?
            </li>
            <li>
              7. How quickly can dental practices find a suitable locum dental
              nurse through your platform? 
            </li>
            <li>
              8. What information do I need to provide when posting a job on
              your platform? 
            </li>
            <li>
              9. How do you ensure the reliability and quality of locum dental
              nurses on your platform? 
            </li>
            <li>
              10. Is there customer support available for dental practices using
              your platform? 
            </li>
            <li>
              11. Do you offer any guarantees for locum placements made through
              your platform? 
            </li>
            <li>
              12. How can dental practices track the progress of their job
              postings on your platform? 
            </li>
            <li>
              13. Can dental practices customize their job listings on your
              platform? 
            </li>
            <li>
              14. How do you ensure privacy and security for dental practices
              using your platform? 
            </li>
            <li>
              15. Is your platform accessible to dental practices of all sizes,
              including independent practices and larger corporates? 
            </li>
            <li>
              16. Can dental practices leave feedback or reviews for locum
              dental nurses on your platform? 
            </li>
            <li>
              17. How do I get started as a dental practice on your platform? 
            </li>
          </ul>
        </div>
        <Touch />
      </div>
    </>
  );
};

export default Faq;
