import React, { useState } from "react";
import { Header } from "./Constants";
import ReturnIcon from "../img/returnIcon.png";
import ListOfUsersIconBW from "../img/listOfUsersIconBW.png";
import ListOfUsersIconColored from "../img/listOfUsersIconColored.png";

const ProfileHeader = (props) => {
  const [listIconImg, updatelistIconImg] = useState("listOfUsersIconBW");

  function transitBetweenPages() {
    if (props.currentPage === "home") {
      return (
        <img
          onClick={() => changeBetweenHomeAndListOfMatchs("listOfMatchs")}
          src={returnListIcon()}
          onMouseOver={() => updatelistIconImg("listOfUsersIconColored")}
          onMouseOut={() => updatelistIconImg("listOfUsersIconBW")}
          alt="Change to List Of Matchs"
        />
      );
    } else {
      return (
        <img
          onClick={() => changeBetweenHomeAndListOfMatchs("home")}
          src={ReturnIcon}
          alt="Return to Home."
        />
      );
    }
  }

  function changeBetweenHomeAndListOfMatchs(pageName) {
    props.updateCurrentPage(pageName);
  }

  function returnListIcon() {
    if (listIconImg === "listOfUsersIconBW") {
      return ListOfUsersIconBW;
    } else {
      return ListOfUsersIconColored;
    }
  }

  return (
    <Header>
      <h3>AstroMatch 2.0</h3>
      {transitBetweenPages()}
    </Header>
  );
};

export default ProfileHeader;
