import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import sneakerlah from "../assets/img/projects/sneakerlah.png";
import flipbizz from "../assets/img/projects/flipbizz.png";
import unQuestionnaire from "../assets/img/projects/un_questionnaire.png";
import adignis from "../assets/img/projects/adignis.png";
import afaTournament from "../assets/img/projects/afa_tournament.png";
import afaKiosk from "../assets/img/projects/afa_kiosk.png";
import afaCoaching from "../assets/img/projects/afa_coaching.png";
import idenfic from "../assets/img/projects/idenfic.png";
import reskills from "../assets/img/projects/reskills.png";
import tlb from "../assets/img/projects/tlb.png";
import pcoins from "../assets/img/projects/pcoins.png";
import rezo from "../assets/img/projects/rezo.png";
import smartNurse from "../assets/img/projects/smart nurse.jpg";
import teresa from "../assets/img/projects/teresa.jpg";
import banglaDigit from "../assets/img/projects/bangla digit.png";
import depression from "../assets/img/projects/depression.png";
import mask from "../assets/img/projects/mask.png";
import chefZilla from "../assets/img/projects/chef zilla.jpg";
import cineplex from "../assets/img/projects/cineplex.jpg";
import coffee from "../assets/img/projects/coffe.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Sneakerlah",
      description: "Discover curated local fashion brands that blend style and exclusivity.",
      imgUrl: sneakerlah,
      category: "web"
    },
    {
      title: "FlipBizz",
      description: "Platform for enhancing professional networking.",
      imgUrl: flipbizz,
      category: "web"
    },
    {
      title: "UN Questionnaire",
      description: "A tool designed to assess progress towards the Sustainable Development Goals (SDGs).",
      imgUrl: unQuestionnaire,
      category: "web"
    },
    {
      title: "Adignis",
      description: "An interactive review platform designed to deliver valuable insights and transparent feedback.",
      imgUrl: adignis,
      category: "web"
    },
    {
      title: "AFA Tournament",
      description: "A competitive platform for organizing and engaging in tournaments.",
      imgUrl: afaTournament,
      category: "web"
    },
    {
      title: "AFA Kiosk",
      description: "An online court booking platform designed to promote active lifestyles.",
      imgUrl: afaKiosk,
      category: "web"
    },
    {
      title: "AFA Coaching",
      description: "A platform to connect with seasoned coaches for personal and professional development.",
      imgUrl: afaCoaching,
      category: "web"
    },
    {
      title: "Idenfic",
      description: "A mobile app to help verify the legitimacy of online sellers by checking their bank accounts.",
      imgUrl: idenfic,
      category: "mobile"
    },
    {
      title: "Reskills",
      description: "A global online learning platform offering flexible learning opportunities.",
      imgUrl: reskills,
      category: "web"
    },
    {
      title: "TLB",
      description: "TLB Industry Sdn. Bhd. is a Malaysian company specializing in plastic packaging solutions.",
      imgUrl: tlb,
      category: "web"
    },
    {
      title: "Pcoins",
      description: "A Malaysian technology company offering various tech products and solutions.",
      imgUrl: pcoins,
      category: "web"
    },
    {
      title: "Rezo",
      description: "A Malaysian firm that provides technology and digital solutions.",
      imgUrl: rezo,
      category: "web"
    },
    {
      title: "Smart Nurse",
      description: "MERN Full Stack(MongoDB, Express, React, Node)",
      imgUrl: smartNurse,
      category: "web"
    },
    {
      title: "Teresa",
      description: "MERN Full Stack(MongoDB, Express, React, Node)",
      imgUrl: teresa,
      category: "web"
    },
    {
      title: "Teresa App",
      description: "React Native mobile application for medication management.",
      imgUrl: teresa,
      category: "mobile"
    },
    {
      title: "Bangla Digit Recognition",
      description: "Applied ml model & used numtadb dataset",
      imgUrl: banglaDigit,
      category: "ml"
    },
    {
      title: "Predict Suicidal Thought",
      description: "Applied ML model to detect suicidal thought",
      imgUrl: depression,
      category: "ml"
    },
    {
      title: "Detect mask person",
      description: "Applied CNN model to detect whether a person has worn a mask or not.",
      imgUrl: mask,
      category: "ml"
    },
    {
      title: "Chef Zilla",
      description: ".NET and C# with maintaining MVC pattern",
      imgUrl: chefZilla,
      category: "desktop"
    },
    {
      title: "Cineplex Management System",
      description: "This is a desktop application using JAVA Swing and SQL",
      imgUrl: cineplex,
      category: "desktop"
    },
    {
      title: "Coffee House",
      description: "HTML, CSS, Bootstrap & PHP for backend",
      imgUrl: coffee,
      category: "web"
    }
  ];

  const webProjects = projects.filter(project => project.category === "web");
  const mlProjects = projects.filter(project => project.category === "ml");
  const mobileProjects = projects.filter(project => project.category === "mobile");
  const desktopProjects = projects.filter(project => project.category === "desktop");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Click on the pictures to view the details</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Desktop Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            webProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            mlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            mobileProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {
                            desktopProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
