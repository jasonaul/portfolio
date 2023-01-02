import React from "react";
import './Footer.css'
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaTwitter,
    FaLinkedin,
    FaGithub
  } from "react-icons/fa";

  
  
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <div>
                <p>Union Market</p>
                <p>Washington, DC, USA</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +1 314-479-6074
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                jason.aul@gmail.com
              </h4>
            </div>
          </div>
  
          <div className="right">
            <h4>About Jason</h4>
            <p>
              Jason Aul is a software engineer who previously has over 10-years in cross-functional expertise in public affairs and marketing.
            </p>
            <div className="social">

              <a href="https://github.com/jasonaul">
                <FaGithub size={30}
                style={{ color: "#fff", marginRight: "1rem" }} />
              </a>

              <a href="https://twitter.com/jasonaul">
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
              </a>
             
              <a href="https://linkedin.com/in/jasonaul"><FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></a>
             
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  