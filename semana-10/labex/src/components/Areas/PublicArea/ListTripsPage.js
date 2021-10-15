import React, { useState, useEffect } from "react";
import Header from "../../SharedContent/Header";
import {
  TravelPageContainer,
  apiAuthorization,
  DispostionOfListElements,
  CardStyle,
} from "../../SharedContent/StyleConfiguration";
import { useRequestData } from "../../SharedContent/Hooks";
import { useHistory } from "react-router";

const TravelPage = (props) => {
  
  const [listOfTrips, setListOfTrips] = useState("");

  // const getImageSource = () => {
    

  //   return `../../../img/backgroundNASAImages/${numberOfTheImage}`
  // }

  const listOfTravels = useRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trips`
  );

  useEffect(() => {
    setListOfTrips(listOfTravels);
  }, [listOfTravels, listOfTravels]);

  const numberOfTheImage = () => { return Math.floor(Math.random() * 10) + 1}

  // const imageToRender = () => {
  //   return ALL.file1
  //   // ALL.filter((image) =>{
  //   //   console.log(image)
  //   //   if(image === file1)
  //   //   return image
  //   // })
  // }
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
            {/* <img src={file1} /> */}
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
      console.log(elements, "final");
      return elements;
    } else {
      <h1>Loading...</h1>;
    }
  };

  // const listOfTravels =
  // name, planet, date, description, durationInDays
  return (
    <TravelPageContainer>
      <Header />
      <DispostionOfListElements>
          {renderElements()}
        </DispostionOfListElements>
    </TravelPageContainer>
  );
};

export default TravelPage;
