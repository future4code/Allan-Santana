import React from "react";
import { useHistory } from "react-router-dom";
import RocketIcon from "../../../img/rocketIconColored.png";
import AdministrativeIcon from "../../../img/administrativeIcon.png";
import {
  HomePageGeneralContainer,
  InitialOptionsContainer,
  ButtonDisposition,
} from "../../SharedContent/StyleConfiguration";

const Home = () => {
  const history = useHistory();
  const goToTravelPage = () => {
    history.push("/trips/list");
  };

  const goToAdministrativePage = () => {
    history.push("/administrativepage");
  };

  return (
    <HomePageGeneralContainer>
      <h1>Hello and welcome to LabeX</h1>
      <InitialOptionsContainer>
        <ButtonDisposition>
          <img src={RocketIcon} onClick={goToTravelPage} />
          <figcaption>
            <strong> Travel Page </strong>
          </figcaption>
        </ButtonDisposition>

        <ButtonDisposition>
          <img src={AdministrativeIcon} onClick={goToAdministrativePage} />
          <figcaption>
            <strong> Administrative Page </strong>
          </figcaption>
        </ButtonDisposition>
      </InitialOptionsContainer>
    </HomePageGeneralContainer>
  );
};

export default Home;
