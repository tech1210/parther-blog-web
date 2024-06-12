import "./style.css";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={banner} alt="" />

      <div className="banner-content">
        <div className="title">
          Richird Norton photorealistic rendering as real photos
        </div>
        <div className="about">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </div>

        <span className="line"></span>

        <div className="date">08.08.2021</div>
      </div>
    </div>
  );
};

export default Banner;
