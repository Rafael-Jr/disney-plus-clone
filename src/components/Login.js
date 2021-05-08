import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          In reality, someone has to have familiarity with HTML-CSS-JS. If you
          do React right away, you might get lost. ​Do you want to master React
          JS & learn how to make an income with your new skills? 🔥 Click here &
          enroll NOW 👇 https://cleverprogrammer.com/pwj?utm_...
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 4em);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-size: 100%;
    z-index: -1;
    opacity: 0.8;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 0.8em 0;
  border-radius: 0.4em;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 0.5em;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  margin-top: 1.2em;
  letter-spacing: 1.2px;
  text-align: center;
  font-size: 0.7em;
  font-weight: 600;
`;

const CTALogoTwo = styled.img`
  margin-top: 1em;
  width: 90%;
`;
