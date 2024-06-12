import "./style.css";
import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <ul className="social_media">
      <li>
        <a href="#">
          <MdFacebook className="icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <AiOutlineTwitter className="icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaYoutube className="icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <RiInstagramFill className="icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
