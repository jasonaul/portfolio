import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Introduction.css'
// import { TiltProps } from "react-parallax-tilt";

function Introduction() {
    return(
        <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className='h1-screen' style={{ fontSize: "2.6em" }}>
              Hi there! Let me <span className="boldthings"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              I'm an emerging software engineer who thrives at the intersection of design, creation, and implementation of tools and services that we use.
              <br />
              <br />I am professionally proficient in awesome languages such as
              <i>
                <b className="boldthings"> JavaScript, React, NodeJS, HTML, CSS, Python, and more. </b>
              </i>
              <br />
              <br />
              My interest and passion for software engineering began years ago, but blossomed in 2022 when I attended a coding bootcamp, accumulating <i><span className="boldthings">over 450 hours</span></i> of coding experience.  &nbsp;
              
              <br />
              <br />
              I love applying my passions to develop products using the <span className="boldthings"> MERN stack</span>, and thoroughly enjoy utilizing React. I am currently strengthening my MERN stack skills and learning <b className="boldthings">Go.</b> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <TiltProps> */}
              <img src={'https://i.imgur.com/KaJdR60.png'} className="end-img" alt="avatar" />
            {/* </TiltProps> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT!</h1>
            <p>
              Feel free to <span className="boldthings">find me</span> on your favorite platform
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jasonaul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/jasonaul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jasonaul/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jasonaul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    )
}

export default Introduction