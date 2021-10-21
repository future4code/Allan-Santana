import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import HomePage from "./components/Areas/PublicArea/HomePage";
import { GloabalStyle } from "./components/SharedContent/StyleConfiguration";
import ListTripsPage from "./components/Areas/PublicArea/ListTripsPage";
import AdminHomePage from "./components/Areas/PrivateArea/AdminHomePage";
import ApplicationFormPage from "./components/Areas/PublicArea/ApplicationFormPage"
import LoginPage from "./components/Areas/PublicArea/LoginPage"
import TripDetailsPage from "./components/Areas/PrivateArea/TripDetailsPage"
import CreateTripPage from "./components/Areas/PrivateArea/CreateTripPage"

const App = () => {
  const [ userName ] = useState("Teste User");

  let history = useHistory()

  function goToLoginPage(){
    history.push("/login");
  }

  return (
    <div>
      <GloabalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/trips/list">
            <ListTripsPage 
            name={userName}
            />
          </Route>

          <Route exact path="/trips/application">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/login">
            <LoginPage 
            goToLoginPage = {goToLoginPage}
            history = {history}
            />
          </Route>

          <Route exact path="/administrativePage">
            <AdminHomePage 
            setTripId = {setTripId} 
            goToLoginPage = {goToLoginPage}
            history = {history}
            />
          </Route>

          <Route exact path="/admin/trips/:id">
            <TripDetailsPage 
            tripId = {tripId}
            />
          </Route>

          <Route exact path="/admin/trips/create">
            <CreateTripPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
