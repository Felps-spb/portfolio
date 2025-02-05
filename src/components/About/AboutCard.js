import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luiz Felipe </span>
            from <span className="purple"> Recife, Pernambuco</span>
            <br />
            Currently, I work as a researcher and back-end developer at IFPE.
            <br />

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> watch football
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
