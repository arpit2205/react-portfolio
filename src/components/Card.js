import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

const ExpCard = ({ role, date, image, desc, companyLink }) => {
  const navigate = () => {
    window.location = `${companyLink}`;
  };

  return (
    <div>
      <Fade bottom>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{role}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {date}
            </CardSubtitle>
          </CardBody>
          <img
            className="company-logo"
            width="100%"
            src={image}
            alt="Card image cap"
            className="p-2"
            onClick={navigate}
          />
          <CardBody>
            <CardText>{desc}</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Fade>
    </div>
  );
};

export default ExpCard;
