import React from "react";
import RocketIcon from "../img/rocketIconColored.png";
import AdministrativeIcon from "../img/administrativeIcon.png";
import { GeneralContainer, InitialOptionsContainer } from "./Constants";

const Home = (props) => {
  return (
    <GeneralContainer>
      <h1>Hello and welcome to LabeX</h1>
      <InitialOptionsContainer>
        <img
          src={RocketIcon}
          onClick={() => props.setCurrentPage("travelPage")}
        />

        <img
          src={AdministrativeIcon}
          onClick={() => props.setCurrentPage("administrativePage")}
        />
      </InitialOptionsContainer>
    </GeneralContainer>
  );
};

export default Home;
