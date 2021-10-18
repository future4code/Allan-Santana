import React, { useState, useEffect } from "react";
import Header from "../../SharedContent/Header";
import {
  TravelPageContainer,
  DispostionOfListElements,
  CardStyle,
} from "../../SharedContent/StyleConfiguration";
import { useRequestData, apiAuthorization } from "../../SharedContent/Hooks";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import axios from "axios";

const AdminHomePage = (props) => {
  
  const history = useHistory()

  useEffect(() => {
      const token = window.localStorage.getItem('token')

      if(token === null){
          history.push('/login')
      }
  }, [history])

  const [listOfTrips, setListOfTrips] = useState("");

  const listOfTravels = useRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trips`
  );

  useEffect(() => {
    setListOfTrips(listOfTravels);
  }, [listOfTravels, listOfTravels]);

  // const imageToRender = () => {
  //   return ALL.file1
  //   // ALL.filter((image) =>{
  //   //   console.log(image)
  //   //   if(image === file1)
  //   //   return image
  //   // })
  // }
  const goToDeatilsPage = (id) => {
    console.log(id)
    history.push(`/admin/trips/${id}`)
  };
  const renderElements = () => {
    if (listOfTravels) {
      const elements = listOfTravels.map((trip) => {
        return (
          <CardStyle key={trip.id} onClick={() => goToDeatilsPage(trip.id)}>
            <h3>{trip.name}</h3>
            <div>
              <p>{trip.description}</p>
            </div>
            <div>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays} dias</p>
              <p>{trip.date}</p>
            </div>
          </CardStyle>
        );
      });
      return elements;
    } else {
      <h1>Loading...</h1>;
    }
  };

  return (
    <TravelPageContainer>
      <Header
        handleLogedStatus={props.handleLogedStatus}
        setLogedStatus={props.setLogedStatus}
        logedStatus={props.logedStatus}
      />
      <DispostionOfListElements>{renderElements()}</DispostionOfListElements>
    </TravelPageContainer>
  );
};

export default AdminHomePage;
