import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import { Container } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <div>Contact</div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
