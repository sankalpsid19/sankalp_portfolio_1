import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import fakebook from "../../assets/fakebook.png";
import onnbikes from "../../assets/onn-bikes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakebook}
              isBlog={false}
              title="FakeBook"
              description="Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called FakeBook and it is a simple social media app that allows users to post interesting events that happened in their lives."
              link="https://github.com/sankalp-yadav-au17/fakeBook-heroku"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onnbikes}
              isBlog={false}
              title="Onn Bikes"
              description="ONN Bikes is a Rent a Bike or Scooty with Most Flexible Daily, Weekly & Monthly Bike Rental Plans @ Most Affordable Price. Free Helmet & Easy Booking."
              link="https://github.com/sankalp-yadav-au17/ONN-Bikes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
