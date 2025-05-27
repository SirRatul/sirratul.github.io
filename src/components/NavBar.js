import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h2 className="logo">Samsul Islam</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('home');
                                scrollToSection('home');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('skills');
                                scrollToSection('skills');
                            }}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('projects');
                                scrollToSection('projects');
                            }}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/samsulislam/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                            <a href="https://github.com/SirRatul" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                            <a href="https://www.facebook.com/samsul.ratul" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                        </div>
                        <HashLink to='#connect'>
                            <button className="vvd"><span>Let's Connect</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
