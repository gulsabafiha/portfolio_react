import React from "react";
import "./Home.css";
import banner from "../../assests/ban.png";
import {
  faArrowRight,
  faUser,
  faSms,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  const portfolio = <FontAwesomeIcon icon={faBriefcase} />;
  const contact = <FontAwesomeIcon icon={faSms} />;
  return (
    <div className="home-container">
      <div style={{margin:'10px'}}>
        <img src={banner} height="800px" width="750px"  alt="Banner" />
      </div>
      <div className="banner-content">
        <p style={{ color: "#72B626" }}>I'M GULSABA FIHA</p>
        <p style={{ color: "#666666" }}>
          MERN STACK WEB <br /> DEVELOPER
        </p>
        <a
          className="button"
          href="https://drive.google.com/file/d/1Fb0TvsU186nkbUQs7nzUfgC1yP-VEP5R/view?usp=sharing"
        >
          Resume {arrow}{" "}
        </a>
      </div>
      <div className="nav-container">
        <ul>
          <Link  to="/user">
            <span>{user}</span>
          </Link>
        </ul>
        <ul>
          <Link to="/contact">{contact}</Link>
        </ul>
        <ul>
          <Link to="/portfolio">{portfolio}</Link>
        </ul>
      </div>
    </div>
  );
};
export default Home;
