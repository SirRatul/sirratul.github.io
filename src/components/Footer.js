import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-content">
          <Col size={12} sm={6}>
            <h2 className="footer-logo">Samsul Islam</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-social">
              <a href="https://www.linkedin.com/in/samsulislam/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://github.com/SirRatul" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://www.facebook.com/samsul.ratul" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            </div>
            <p className="copyright">Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
