import React, { useState, useEffect } from "react";
import Header from "../../SharedContent/Header";
import {
  TravelPageContainer,
  DispostionOfListElements,
  CardStyle,
} from "../../SharedContent/StyleConfiguration";
import { useRequestData, apiAuthorization } from "../../SharedContent/Hooks";
import { useHistory } from "react-router-dom";

const TravelPage = (props) => {

  const [listOfTrips, setListOfTrips] = useState("");

  const listOfTravels = useRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trips`
  );

  useEffect(() => {
    setListOfTrips(listOfTravels);
  }, [listOfTravels, listOfTravels]);

  const history = useHistory()
  const goToDeatilsPage = () => {
    history.push("/trips/application")
  }
  const renderElements = () => {

    if (listOfTravels) {
      const elements = listOfTravels.map((trip) => {
        return (
        <CardStyle key={trip.id} onClick={() => goToDeatilsPage()}>
            <h3>{trip.name}</h3>
            <div>
            <p>
                {trip.description}
            </p>
            </div>
            <div>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays} dias</p>
              <p>{trip.date}</p>
            </div>
            
        </CardStyle>
            )
      });
      return elements;
    } else {
      <h1>Loading...</h1>;
    }
  };
  return (
    <TravelPageContainer>
      <Header 
      handleLogedStatus = {props.handleLogedStatus}
      setLogedStatus = {props.setLogedStatus}
      logedStatus = {props.logedStatus}
      />
      <DispostionOfListElements>
          {renderElements()}
        </DispostionOfListElements>
    </TravelPageContainer>
  );
};

export default TravelPage;
