import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Row,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

const SkillCard = (props) => {
  return (
    <div>
      <Card id="skills" className=" mx-2 my-4 py-2">
        <CardBody>
          <CardTitle tag="h1" className="ml-2 section-heading">
            Skills 💥
          </CardTitle>
          <Fade cascade bottom>
            <div className="my-4">
              <Badge color="primary" pill className="skill-badge m-2">
                HTML5
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                CSS3
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                JavaScript
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                C++
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Python
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                ReactJS
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Git
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                GitHub
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                UI Design
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Web Development
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Bootstrap
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                SASS
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Figma
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                jQuery
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Responsive Design
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Wireframing
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Agile Methodologies
              </Badge>
              <Badge color="primary" pill className="skill-badge m-2">
                Cyber Security
              </Badge>
            </div>
          </Fade>
        </CardBody>
      </Card>
    </div>
  );
};

export default SkillCard;
