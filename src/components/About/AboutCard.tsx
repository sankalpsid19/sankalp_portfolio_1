import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sankalp Yadav </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a MERN stack developer, pursued ECE from SRM University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Any)
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Every great developer you know got there by solving problems they
            were unqualified to solve until they actually did it.”{" "}
          </p>
          <footer className="blockquote-footer">Patrick McKenzie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
