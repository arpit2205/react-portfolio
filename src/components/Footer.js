import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import hand from './emoji/handSmall.png';

const Footer = () => {
  const width = window.screen.width;

  return (
    <Container id="footer" fluid={true} className="px-4 py-2 mt-5">
      <Row>
        <Col>
          <SiGithub
            size={width > 768 ? 40 : 30}
            color={'#171515'}
            className="mr-3"
          />
          <SiLinkedin
            size={width > 768 ? 40 : 30}
            color={'#0e76a8'}
            className="mx-3"
          />
          <SiInstagram
            size={width > 768 ? 40 : 30}
            color={'#FB3958'}
            className="mx-3"
          />
        </Col>
      </Row>

      <Row className="">
        <Col>
          <h1 className="section-heading catchup mt-3">
            <img src={hand} id="hand" /> Lets catch up.
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
