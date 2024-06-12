import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src={Logo}
              style={{ height: "50px", color: "#6842FF" }}
              alt="logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/" className="line">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="line">
            About
          </Link>
        </li>
        <li>
          <Link to="/about" className="line">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/about" className="line">
            Contact Us
          </Link>
        </li>
        <span> | </span>
        <li>
          <a href="/fb">
            <MdFacebook className="nav_icon" />
          </a>
        </li>
        <li>
          <a href="/tr">
            <AiOutlineTwitter className="nav_icon" />
          </a>
        </li>
        <li>
          <a href="/yt">
            <FaYoutube className="nav_icon" />
          </a>
        </li>
        <li>
          <a href="/ig">
            <RiInstagramFill className="nav_icon" />
          </a>
        </li>
        <span> | </span>
        <li>
          <FiSearch className="nav_icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
