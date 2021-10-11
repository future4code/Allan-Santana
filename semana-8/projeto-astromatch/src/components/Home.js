import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ListOfMatchs from "./ListOfMatchs";
import Blackheart from "../img/blackheart.png";
import Whiteheart from "../img/whiteheart.png";
import RejectIconBw from "../img/rejectIconBW.png";
import RejectIconColored from "../img/rejectIconColored.png";

import {
  ButtonsDisposition,
  StyleForUserManagement,
  PhotoStyle,
  CurrentProfileContainer,
  ActualProfile,
} from "./Constants";

const Home = () => {
  const [currentPage, updateCurrentPage] = useState("home");
  const [heartImg, updateHeartImg] = useState("Whiteheart");
  const [rejectImg, updateRejectImg] = useState("RejectIconBw");
  const [user, setUser] = useState("TestUser");
  const [listOfMatchs, updateListOfMatchs] = useState({});
  const [userIsBeingDefined, alterUserIsBeingDefined] = useState(false);
  const [userInput, updateUserInput] = useState("");
  const [profile, updateProfile] = useState({
    id: "",
    age: "",
    name: "",
    photo: "",
    bio: "",
  });

  useEffect(() => {
    function getProfile() {
      const trimedUser = user.trim();
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/person`
        )
        .then((response) => {
          updateProfile(response.data.profile);
          getMatches();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function getMatches() {
      const trimedUser = user.trim();
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/matches`
        )
        .then((response) => {
          updateListOfMatchs(response.data.matches);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getProfile();
  }, [user]);

  function renderCurrentUserControl() {
    if (userIsBeingDefined) {
      return (
        <div>
          <p>
            {" "}
            <strong>Current User:</strong>
          </p>
          <input
            placeholder="Insert your username"
            value={userInput}
            onChange={(event) => updateUserInput(event.target.value)}
          />
          <button
            onClick={() => {
              alterUserIsBeingDefined(false);
              setUser(userInput);
            }}
          >
            Salvar
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            {" "}
            <strong>Current User:</strong>
          </p>
          <p onClick={() => alterUserIsBeingDefined(true)}>{user}</p>
        </div>
      );
    }
  }

  function returnMatchIcon() {
    if (heartImg === "Whiteheart") {
      return Whiteheart;
    } else {
      return Blackheart;
    }
  }

  function returnRejectIcon() {
    if (rejectImg === "RejectIconBw") {
      return RejectIconBw;
    } else {
      return RejectIconColored;
    }
  }

  function getProfile() {
    const trimedUser = user.trim();
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/person`
      )
      .then((response) => {
        updateProfile(response.data.profile);
        getMatches();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMatches() {
    const trimedUser = user.trim();
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/matches`
      )
      .then((response) => {
        updateListOfMatchs(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cleanHistoryOfMatchesAndSwipes() {
    const trimedUser = user.trim();
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/clear`
      )
      .then((response) => {
        alert("Matches e Swipes resetados com sucesso.");
        console.log(response)
        getMatches();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function matchThePerson(boolean) {
    const body = {
      id: profile.id,
      choice: boolean,
    };
    const trimedUser = user.trim();
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${trimedUser}/choose-person`,
        body
      )
      .then((response) => {
        getProfile();
        if (boolean) {
          alert("Tentativa de Match registrada!");
          getMatches();
        } else {
          alert("Perfil rejeitado com sucesso.");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  function renderizePage() {
    switch (currentPage) {
      case "home":
        return (
          <ActualProfile>
            <ProfileHeader
              user={user}
              listOfMatchs={listOfMatchs}
              updateCurrentPage={updateCurrentPage}
              currentPage={currentPage}
            />

            <PhotoStyle>
              <img src={profile.photo} alt="Profile" />
              <figcaption>
                <p>
                  <strong>{profile.name}</strong> <br /> {profile.bio}
                </p>
              </figcaption>
            </PhotoStyle>

            <ButtonsDisposition>
              <img
                alt="Reject Button"
                onClick={() => {
                  matchThePerson(false);
                }}
                src={returnRejectIcon()}
                onMouseOver={() => updateRejectImg("RejectIconColored")}
                onMouseOut={() => updateRejectImg("RejectIconBw")}
              />

              <img
                alt="Match Button"
                src={returnMatchIcon()}
                onClick={() => {
                  matchThePerson(true);
                }}
                onMouseOver={() => updateHeartImg("Blackheart")}
                onMouseOut={() => updateHeartImg("Whiteheart")}
              />
            </ButtonsDisposition>
          </ActualProfile>
        );
      case "listOfMatchs":
        return (
          <ListOfMatchs
            user={user}
            listOfMatchs={listOfMatchs}
            updateCurrentPage={updateCurrentPage}
            currentPage={currentPage}
          />
        );
      default:
        <p>Something has gone terrible wrong...</p>;
    }
  }
  return (
    <CurrentProfileContainer>
      <StyleForUserManagement>
        {renderCurrentUserControl()}
      </StyleForUserManagement>
      {renderizePage()}
      <button onClick={() => cleanHistoryOfMatchesAndSwipes()}>
        Limpar Swipes e Matches
      </button>
    </CurrentProfileContainer>
  );
};

export default Home;
