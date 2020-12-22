import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

const EduCard = ({ title, subtitle, image, desc, link }) => {
  const navigate = () => {
    window.location = `${link}`;
  };

  return (
    <div>
      <Fade>
        <Card
          style={{ display: 'flex', flexDirection: 'row' }}
          className="mb-3 card"
        >
          <div>
            <CardImg
              className="my-4 mx-2"
              style={{ height: '100px', width: '100px' }}
              top
              width="100%"
              src={image}
              alt="Card image cap"
              onClick={navigate}
            />
          </div>
          <div>
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {subtitle}
              </CardSubtitle>
              <CardText>{desc}</CardText>
              {/* <Button>Button</Button> */}
            </CardBody>
          </div>
        </Card>
      </Fade>
    </div>
  );
};

export default EduCard;
