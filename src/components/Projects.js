import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

const Projects = () => {
  let width = window.screen.width;
  return (
    <Container id="projects" fluid={true} className="px-4 py-2">
      <Row>
        <h1 className="ml-3 mb-4 mt-3 section-heading">
          Projects &nbsp;
          {width < 768 ? <br /> : ''}
          <Badge color="success">Coming soon ⚙</Badge>
        </h1>
      </Row>
      <hr className="mx-2" />
    </Container>
  );
};

export default Projects;
