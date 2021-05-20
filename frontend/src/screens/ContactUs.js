import React from "react";
import { Button, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <Card border='info' className='text-center'>
        <Card.Header>Owner</Card.Header>
        <Card.Body>
          <Card.Title>Patanjali Arogya Kendra</Card.Title>
          <Card.Text>Hari Kumar Raja</Card.Text>
          <Card.Text>Contact: +91-9379919266</Card.Text>
          <Card.Text>Email: patanjalirmnagar@gmail.com</Card.Text>
          <a
            href='https://maps.app.goo.gl/Vpxh9qHN3zKUmuHj7'
            className='btn btn-light my-3'>
            <Button className='my-3'>
              <i className='fas fa-map-marker-alt fa-3x'></i>
            </Button>
          </a>
        </Card.Body>
        <Card.Footer className='text-muted'>
          DHANALAKSHMI ENTERPRISES - All Ptanjali Products Available!!
        </Card.Footer>
      </Card>
      <br />
      <br />
      <Card border='dark' className='text-center'>
        <Card.Header>Developer</Card.Header>
        <Card.Body>
          <Card.Title>Bhavana Lalitha Kumari Namburu</Card.Title>
          <Card.Text>Email: bhavananamburu98@gmail.com</Card.Text>
          <a
            href='https://www.linkedin.com/in/bhavana-lalitha-kumari-namburu-75b054179/'
            className='btn btn-light my-3'>
            <Button className='my-3'>
              <i className='fab fa-linkedin-in fa-3x'></i>
            </Button>
          </a>
        </Card.Body>
        <Card.Footer className='text-muted'>
          Contact for paid website development
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContactUs;
