import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import EduCard from './EducationCard';
import mait from './mait-logo.png';
import cbse from './cbse-logo.png';
import hundred from './emoji/hundred.gif';

const Education = ({}) => {
  return (
    <Container id="education" fluid={true} className="px-4 py-2">
      <Row>
        <h1 className="ml-3 mb-4 section-heading">
          Education <img src={hundred} />
        </h1>
      </Row>
      <Row>
        <Col md={6}>
          <EduCard
            title="B.Tech (IT)"
            subtitle="2019-2023"
            desc="Maharaja Agrasen Institute of Technology, Delhi"
            image={mait}
            link="https://mait.ac.in/"
          />
        </Col>
        <Col md={6}>
          <EduCard
            title="XII Science"
            subtitle="2017-2018"
            desc="Central Board of Secondary Education"
            image={cbse}
            link="https://cbse.nic.in/newsite/index.html"
          />
        </Col>
      </Row>
      <hr className="" />
    </Container>
  );
};

export default Education;
