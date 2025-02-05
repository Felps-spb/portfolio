import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Dashboard Clima"
              description="Este projeto é um dashboard de clima interativo que fornece informações em tempo real sobre o clima, incluindo temperatura, umidade, velocidade do vento e qualidade do ar"
              ghLink="https://github.com/Felps-spb/dashboard-clima"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog-Node.js"
              description="Este é um projeto de blog desenvolvido com Node.js, Express, MongoDB e Handlebars. O objetivo deste projeto é criar uma plataforma de blog onde os usuários podem se registrar, fazer login, criar, editar e excluir postagens e categorias."
              ghLink="https://github.com/Felps-spb/projetoNode-Blog-Node.js"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
