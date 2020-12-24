import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import fire from './emoji/fire.gif';
import bomb from './emoji/bomb.gif';

const Projects = () => {
  let width = window.screen.width;
  return (
    <Container id="projects" fluid={true} className="px-4 py-2">
      <Row>
        <h1 className="ml-3 mb-4 mt-3 section-heading">
          Projects <img src={fire} /> &nbsp;
          {width < 768 ? <br /> : ''}
          <Badge color="success">Coming soon</Badge>
        </h1>
      </Row>
      <Row className="bomb-row">
        <img src={bomb} className="mx-auto" />
      </Row>

      <hr />
    </Container>
  );
};

export default Projects;
