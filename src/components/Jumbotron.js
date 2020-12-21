import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import { SiLinkedin } from 'react-icons/si';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const Header = (props) => {
  const navigate = () => {
    window.location = 'https://www.linkedin.com/in/arpit-gupta-28710318b/';
  };

  return (
    <div>
      <Fade duration={1000}>
        <Jumbotron className="px-4 py-5">
          <h1 className="display-4">
            <HeadShake>Hey there! 👋</HeadShake>
          </h1>
          <p className="lead" style={{ fontSize: '32px' }}>
            I'm <b>Arpit Gupta</b>, an experienced Frontend (React🚀) Developer
            from Delhi, India.
          </p>

          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Fade bottom>
              <Button color="primary" onClick={navigate}>
                Connect with me &nbsp;{' '}
                <SiLinkedin
                  style={{ transform: 'translateY(-1px)' }}
                  className="icon"
                />
              </Button>
            </Fade>
          </p>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default Header;
