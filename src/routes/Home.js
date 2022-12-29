import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Type
 from '../components/Type';
import './Home.css'

const Home = () => {
  return (
    <section>
    <Container fluid className="home-section" id="home">

      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Welcome! {" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              My name is
              <strong className="main-name"> Jason Aul</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <h1>I'm a</h1><Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={'https://avatars.githubusercontent.com/u/63729691'}
              alt="home pic"
              class="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
  )
}

export default Home