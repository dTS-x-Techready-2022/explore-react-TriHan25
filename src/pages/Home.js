import React from "react";
import "./styles/Home.scss";

import helloImg from "../images/hello.jpg";

import { Container } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CountDown } from "../components/CountDown";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="wrapper-banner"></div>
      <Container>
        <CountDown></CountDown>
        <div className="content1">
          <img src={helloImg} alt="Banner"></img>
          <div>
            <p className="text1">Selamat Datang</p>

            <p className="text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sint natus illo vero eveniet quasi rem minus, quos
              iure esse nemo dolor sit cupiditate tenetur blanditiis ut nostrum
              eum obcaecati.
            </p>
          </div>
        </div>
        <div className="content1">
          {/* <img src={helloImg} alt="HelloImg"></img> */}
          <div>
            {/* <p className="text1">Selamat Datang</p> */}

            <p className="text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sint natus illo vero eveniet quasi rem minus, quos
              iure esse nemo dolor sit cupiditate tenetur blanditiis ut nostrum
              eum obcaecati.
            </p>
          </div>
        </div>
        <div></div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
