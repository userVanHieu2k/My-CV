import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// We will create these two pages in Link moment
import "./App.css";
import Users from "./assets/img/100.jpg";
import Abouts from "./pages/information/about";
import Contacts from "./pages/information/contact";
import Educations from "./pages/information/education";
import Experiences from "./pages/information/experience";
import Skills from "./pages/information/skill";

export default function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/"> INFORMATION </Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/skill"> SKILL </Nav.Link>
              <Nav.Link href="/education"> EDUCATON </Nav.Link>
              <Nav.Link href="/experience"> EXPERIENCE </Nav.Link>
              <Nav.Link href="/contact"> CONTACT </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <Routes>
        <Route path="/" element={<Abouts />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/education" element={<Educations />} />
      </Routes>
    </div>
  );
}
