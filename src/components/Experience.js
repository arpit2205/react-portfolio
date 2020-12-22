import React from 'react';
import ExpCard from './Card';
import { Container, Row, Col } from 'reactstrap';
import gfg from './gfg-logo.png';
import dsc from './dsc-logo.png';
import jvr from './jvr-logo.png';
import microsoft from './microsoft-logo.png';
import cb from './cb-logo.png';

const Experience = () => {
  return (
    <div>
      <Container id="experience" fluid={true} className="px-4 py-2">
        <Row>
          <h1 className="ml-3 mb-4 mt-3">Work Experience</h1>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <ExpCard
              role="Technical Content Writer"
              date="Oct 2020 - Present"
              desc="GeeksforGeeks is an online computer science portal which provides well written, well thought, and well-explained solutions to programming/algorithm/interview questions. As a Technical Content Writing Intern, I'm actively contributing by writing and reviewing technical articles at GeeksforGeeks."
              image={gfg}
              companyLink="https://www.geeksforgeeks.org/"
              link1text="My articles"
              link1url="https://bit.ly/gfg-articles"
            />
          </Col>
          <Col md={4} className="mb-3">
            <ExpCard
              role="Core Team Member (Frontend)"
              date="Aug 2020 - Present"
              desc="Developer Student Clubs are university-based community groups for students interested in Google developer technologies. As a core team member of Developer Student Club (DSC powered by Google) of Maharaja Agrasen Institute of Technology for the role of Frontend Developer, I'm actively contributing to team projects and mentoring students."
              image={dsc}
              companyLink="https://developers.google.com/community/dsc"
              link1text="DSC Profile"
              link1url="https://bit.ly/arpitgupta-dsc"
            />
          </Col>
          <Col md={4} className="mb-3">
            <ExpCard
              role="Lead Frontend Developer"
              date="Apr 2020 - Jun 2020"
              desc="Designed, developed, and implemented frontend of an online ML-based hiring platform using HTML5, CSS3 and JavaScript. Oversaw web platform testing, troubleshooting, and user sampling prior to live deployment. Took technical interviews frequently for the intern hiring process. Led a team of UI Developers as a technical lead intern."
              image={jvr}
              companyLink="https://www.jobvacancyresult.com/"
              link1text="Certificate"
              link1url="https://drive.google.com/file/d/1MPCpKzgVw8VdwE6O5BGiNVIwRxprOiuz/view?usp=sharing"
              link2text="Letter of recommendation"
              link2url="https://drive.google.com/file/d/1fQX9F0f-zzl-6O9zWgI-7uEN_J30GLt_/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
      <hr className="mx-4" />

      <Container id="communities" fluid={true} className="px-4 py-2">
        <Row>
          <h1 className="ml-3 my-4">Communities</h1>
        </Row>

        <Row>
          <Col md={4} className="mb-3">
            <ExpCard
              role="Microsoft Learn Student Ambassador"
              date="Aug 2020 - Present"
              desc="Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future. As a Beta member of this community, I'm constantly learning as well as helping students to learn about various Microsoft technologies by conducting online workshops and virtual events."
              image={microsoft}
              companyLink="https://studentambassadors.microsoft.com/"
              link1text="Certificate"
              link1url="https://drive.google.com/file/d/1H7uJYZjCd4yEF7QoC-h21nGoSDk1aiEc/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="mb-3">
            <ExpCard
              role="Campus Ambassador"
              date="Jul 2020 - Present"
              desc="Coding Blocks was founded in 2014 with a mission to create skilled software engineers for our country and the world with an aim to bridge the gap between the quality of skills demanded by industry and the quality of skills imparted by conventional institutes. As a campus ambassador, I'm actively promoting Coding Blocks and conducting workshops related to it in my college."
              image={cb}
              companyLink="https://codingblocks.com/"
              link1text="Certificate of appreciation"
              link1url="https://drive.google.com/file/d/1z_3eNlrqCZLugr0XCLFEU_KkAJlgvI1X/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
