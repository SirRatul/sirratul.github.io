import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      );

      setStatus({ success: true, message: 'Message sent successfully' });
      e.target.reset();
      setButtonText('Send');
    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      setButtonText('Send');
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder="First Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder="Last Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
