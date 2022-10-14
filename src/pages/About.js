import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Container } from "@mui/material";

const About = () => {
  const [user, setUser] = useState([]);
  const random = Math.floor(Math.random() * 10) + 1;
  const profileUser = Object.values(user).map((value, index) => (
    <div key={index}>
      <h2>{value.name}</h2>
    </div>
  ));

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${random}`
    );
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(user);

  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <div>
          <div>About</div>
          <div>{profileUser}</div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
