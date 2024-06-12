import "./style.css";

import Blogs from "../Blogs";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Slider />
      <Blogs />
      <Banner />
    </>
  );
};

export default Home;
