import React from "react";
import styled from "styled-components";
import style from "./Navbar.css";
import img from "./handss.png";
import { Link, useNavigate } from "react-router-dom";
import Discover from "./Discover";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleClick1 = () => {
    window.location.href = 'https://investor-2-0.vercel.app/';
  };

  const visitDiscover = () => {
    navigate("/discover");
  };

  return (
    <>
      <Nav className="main-nav">
        <div className="nav-logo">
          <h3 style={{fontSize:'30px'}}>MobuisEngine</h3>
        </div>
        <Div className="nav-main">
        <div className="Resources">
            <h3>Home</h3>
          </div>
          <div className="about">
            <h3>About us</h3>
          </div>
          <div className="about">
            <h3>Plans</h3>
          </div>
          <div className="Resources">
            <h3>Testimonials</h3>
          </div>
          <div className="Privacy Policy">
            <h3>Privacy Policy</h3>
          </div>
        </Div>
        <div className="buttons" style={{ marginLeft: 602 }}>
          <button className="btn" id="btn-2">
            Get Started
          </button>
        </div>
      </Nav>
      <Main className="main-page">
        <div className="box-1">
          <div className="heading">
            <h1 style={{fontSize:'45px'}}>
            Land job interviews
            </h1>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <h1 style={{fontSize:'55px'}}> <span style={{fontSize:'55px', color:'blueviolet'}}>10x</span> faster</h1>
          </div>
          <div className="head-main">
            <p style={{fontFamily:'sans-serif',fontSize:'25px'}}>
              Custom-built resumes that match your goals, keywords and <br />{" "}
              recruiter expectations.
            </p>
          </div>
          <button className="btn" id="dash-btn" onClick={visitDiscover}>
            Get Started →
          </button>
        </div>
        <Wrap className="box-2"></Wrap>
      </Main>
    </>
  );
};

const Nav = styled.nav`
  margin: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex: 0 50%;
  max-width: 50%;
  flex-direction: row;
  background-image: url(${img});
  background-size: 38rem;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
`;

export default Navbar;
