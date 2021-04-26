import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import hand from './emoji/handSmall.png';
import heart from './emoji/heart.png';
import logo from '../logo.svg';

const Footer = () => {
  const width = window.screen.width;
  const navigate = (link) => {
    window.location = link;
  };

  return (
    <Container id="footer" fluid={true} className="px-4 py-2 mt-2">
      <Row>
        <Col>
          <SiGithub
            size={width > 768 ? 40 : 30}
            color={'#171515'}
            className="mr-3 social-icon"
            onClick={() => {
              navigate('https://github.com/arpit2205');
            }}
          />
          <SiLinkedin
            size={width > 768 ? 40 : 30}
            color={'#0e76a8'}
            className="mx-3 social-icon"
            onClick={() => {
              navigate('https://www.linkedin.com/in/arpit-gupta-28710318b/');
            }}
          />
          <SiInstagram
            size={width > 768 ? 40 : 30}
            color={'#FB3958'}
            className="mx-3 social-icon"
            onClick={() => {
              navigate('https://www.instagram.com/arpithiside/');
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className="section-heading catchup mt-4">
            <img src={hand} id="hand" /> Lets catch up.
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p id="last-text">
            {'</>'} with <img id="heart" src={heart} /> by ARPIT using{' '}
            <img id="logo" className="loading" src={logo} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
