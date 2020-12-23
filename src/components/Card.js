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

const ExpCard = ({
  role,
  date,
  image,
  desc,
  companyLink,
  link1text,
  link2text,
  link1url,
  link2url,
}) => {
  const navigate = () => {
    window.location = `${companyLink}`;
  };

  return (
    <div>
      <Fade bottom duration={500}>
        <Card className="card">
          <Fade duration={500}>
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
              <CardLink href={link1url}>{link1text}</CardLink>
              <CardLink href={link2url}>{link2text}</CardLink>
            </CardBody>
          </Fade>
        </Card>
      </Fade>
    </div>
  );
};

export default ExpCard;
