import React from "react";
import "./styles/navigation.scss";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="wrapper-navbar">
      <Container maxWidth="md" className="container">
        <navbar className="navbar-section">
          <div>
            <h1> My Blog </h1>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </navbar>
      </Container>
    </div>
  );
};
