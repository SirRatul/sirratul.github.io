import { Container, Row, Col } from "react-bootstrap";
import projects from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

const AllProjects = () => (
    <Container>
        <h2>All Projects</h2>
        <Row>
            {projects.map((project) => (
                <Col md={4} key={project.id}>
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
    </Container>
);

export default AllProjects;