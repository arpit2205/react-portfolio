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
} from 'reactstrap';

const SkillCard = (props) => {
  return (
    <div>
      <Card id="skills" className=" m-4">
        <CardBody>
          <CardTitle tag="h1" className="ml-2">
            Skills
          </CardTitle>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default SkillCard;
