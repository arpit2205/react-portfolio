import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import { SiLinkedin } from 'react-icons/si';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import me from './me.png';
import rocket from './emoji/rocket.gif';
import logo from '../logo.svg';

const Header = (props) => {
  const navigate = () => {
    window.location = 'https://www.linkedin.com/in/arpit-gupta-28710318b/';
  };

  return (
    <div>
      <Fade>
        <Jumbotron
          style={{ background: 'none', color: 'white' }}
          id="header"
          className="px-4 py-5"
        >
          {/* <h1 className="display-4">Hey there👋</h1> */}
          <p className="lead" style={{ fontSize: '32px' }}>
            I'm <b>Arpit Gupta</b>, an experienced Frontend React
            {<img id="logo" className="loading" src={logo} />}Developer from
            Delhi, India.
          </p>

          {/* <hr className="my-2" />
          <p>
            I have a profound interest in programming and computer networking.
            Apart from tech, I love music and possess leadership skills.
          </p> */}
          <p className="lead">
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              {/* <img src={me} style={{ height: '40px' }} className="mr-3" /> */}
              <Fade bottom>
                <Button color="primary" onClick={navigate}>
                  Connect with me &nbsp;{' '}
                  <SiLinkedin
                    style={{ transform: 'translateY(-1px)' }}
                    className="icon"
                  />
                </Button>
              </Fade>
            </div>
          </p>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default Header;
