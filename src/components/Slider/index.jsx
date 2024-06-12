import { useState } from "react";
import "./style.css";
import bg1 from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slides = [bg1, bg2, bg3];

  const handleNext = (i) => {
    setIndex(i);
  };

  return (
    <div className="top_section">
      <img src={slides[index]} alt="" />
      <div className="description">
        <h1>Richird Norton photorealistic rendering as real photos</h1>
        <div className="sub_heading">
          <p>08.08.2021</p> <span></span>
          <p>
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
        </div>
      </div>
      <div className="slide_next">
        <span
          className={index === 0 ? "active" : ""}
          onClick={() => handleNext(0)}
        ></span>
        <span
          className={index === 1 ? "active" : ""}
          onClick={() => handleNext(1)}
        ></span>
        <span
          className={index === 2 ? "active" : ""}
          onClick={() => handleNext(2)}
        ></span>
      </div>
    </div>
  );
};

export default Slider;
