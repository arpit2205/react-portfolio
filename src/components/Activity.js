import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const posts = [
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:6745606845861298176"
    height="810"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:6745310607563665408"
    height="695"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:6729342057728524288"
    height="830"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:6727513610572107776"
    height="714"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6717719205317263361"
    height="710"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:6711996689122680832"
    height="772"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
  ></iframe>,
];

const Activity = () => {
  return (
    <Container id="activity" fluid={true} className="px-4 py-2">
      <Row>
        <h1 className="ml-3 mb-4 mt-3 section-heading">Recent Activity</h1>
      </Row>

      <Row>
        {posts.map((el) => (
          <Col>{el}</Col>
        ))}
      </Row>
    </Container>
  );
};

export default Activity;
