import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
// ye color jyada sahi lag raha badalna mat bhosadiwalo
  background-color: #a6c5dfe0; 
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  margin-top: 40px;
  input[type="text"],
  input[type="email"],
  textarea {
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem; /* new line */
  }
  input[type="text"]:first-of-type {
    margin-top: 1rem; /* new line */
  }
`;

// const StyledButton = styled(Button)`
//   background-color: #0077b6; /* new color */
//   border-color: white; /* new color */
//   font-weight: 600;
//   letter-spacing: 1px;
//   margin: 1rem 0;
//   &:hover {
//     background-color: #023e8a; /* new color */
//     border-color: #023e8a; /* new color */
//   }
// `;

const StyledButton = styled(Button)`
  background-color: #2f63c3; /* new color */
  /* border-color: white; new color */
  box-shadow: 1px 2px 14px 0px black;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 1rem 0;
  &:hover {
    background-color: #5b95ff; /* new color */
    border-color: #023e8a; /* new color */
  }
`;


const StyledSection = styled.section`
  background-image: url('https://softlinkoptions.co.ke/wp-content/uploads/2017/09/i-need-a-website-for-my-small-business-where-start1.jpg');
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <StyledForm>
              <h2 className="text-center mt-4 fs-2 fw-bold">Get in Touch</h2>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>
              <StyledButton type="submit" block>
                Send Message
              </StyledButton>
            </StyledForm>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Contact;
