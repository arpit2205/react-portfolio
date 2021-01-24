import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkillCard from './SkillCard';
import skillSVG from './skills-svg.jpg';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Skills = ({}) => {
  return (
    <Container id="skills" fluid={true}>
      <Row>
        <Col md={7} className="mt-4">
          <Zoom duration={500}>
            <SkillCard />
          </Zoom>
        </Col>
        <Col md={5}>
          <Fade duration={500}>
            <img id="skill-svg" src={skillSVG} />
          </Fade>
        </Col>
      </Row>
      {/* <hr className="mx-2" /> */}
    </Container>
  );
};

export default Skills;
