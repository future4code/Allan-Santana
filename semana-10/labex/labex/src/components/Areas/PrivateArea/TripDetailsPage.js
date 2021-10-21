import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiAuthorization } from "../../SharedContent/Hooks";
import Headers from "../../SharedContent/Header";
import {
  ApplicationPageStyle,
  CardStyleForDetailsPage,
  ApplicationDetailsStyle,
} from "../../SharedContent/StyleConfiguration";

const TripDetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const [applications, setApplications] = useState([]);
  const [tripDetails, setTripDetails] = useState({
    name: "",
    planet: "",
    id: "",
    durationInDays: "",
    description: "",
    date: "",
  });

  const [showApplications, setShowApplications] = useState(false);
  const [showApplicationDetails, setShowApplicationDetails] = useState(false);
  const [applicationDetails, setApplicationDetails] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    getTripDetail();
  }, [pathParams.id]);

  useEffect(() => {
    RenderTripDetails();
  }, [tripDetails]);

  function getTripDetail() {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trip/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.trip, "data");
        setApplications(response.data.trip.candidates);
        console.log(applications, "candidatos");
        setTripDetails({
          name: response.data.trip.name,
          planet: response.data.trip.planet,
          durationInDays: response.data.trip.durationInDays,
          description: response.data.trip.description,
          date: response.data.trip.date,
        });
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }

  function decideCandidate(argument, id) {
    const body = {
      approve: { argument },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trips/${pathParams.id}/candidates/${applicationDetails.id}/decide`,
        body,
        {
          headers: {
            "content-type": "application/json",
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        RenderTripDetails()
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }

  const goToDetails = (index) => {
    setApplicationDetails(applications[index]);
    setShowApplications(!showApplications);
  };

  const RenderTripDetails = () => {
    if (tripDetails) {
      return (
        <CardStyleForDetailsPage>
          <h3>{tripDetails.name}</h3>
          <section>
            <div>
              <h4>Trip Description</h4>
              <p>{tripDetails.description}</p>
              <nav>
              {showApplications? (<button
                  onClick={() => {
                    setShowApplications(!showApplications);
                  }}
                >
                  Return To Applications
                </button>) : (false)
                }
                <button>Delete Trip</button>
              </nav>
            </div>
            <div>
              {showApplications ? (
                <ApplicationDetailsStyle>
                  <header>
                    <h4>Candidate: {applicationDetails.name}</h4>
                    <p>Profession: {applicationDetails.profession}</p>
                    <p>Age: {applicationDetails.age}</p>
                    <p>Country: {applicationDetails.country}</p>
                  </header>
                  <p>{applicationDetails.applicationText}</p>
                  <nav>
                    <button
                      onClick={() => {
                        decideCandidate(true, applicationDetails.id);
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => {
                        decideCandidate(false);
                      }}
                    >
                      Reject
                    </button>
                  </nav>
                </ApplicationDetailsStyle>
              ) : (
                applications.map((candidate, index) => {
                  return (
                    <span
                      id={candidate.id}
                      onClick={() => {
                        goToDetails(index);
                      }}
                    >
                      {" "}
                      {candidate.name}
                    </span>
                  );
                })
              )}
            </div>
          </section>
          <div>
            <p>Planeta: {tripDetails.planet}</p>
            <div>
              <p>Duração: </p>
              <p>{tripDetails.durationInDays}/dias</p>
            </div>
            <p>Data da Viagem: {tripDetails.date}</p>
          </div>
        </CardStyleForDetailsPage>
      );
      // return tripsMapping;
    } else {
      return <h1>Loading...</h1>;
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  console.log(tripDetails, "aq");

  console.log(tripDetails, "detalhes");

  return (
    <ApplicationPageStyle>
      <Headers />
      {RenderTripDetails()}
    </ApplicationPageStyle>
  );
};

export default TripDetailsPage;
