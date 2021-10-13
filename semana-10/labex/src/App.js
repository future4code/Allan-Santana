import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import { GloabalStyle } from "./components/StyleConfiguration";
import ListTripsPage from "./components/ListTripsPage";
import AdminHomePage from "./components/AdminHomePage.js";
import ApplicationFormPage from "./components/ApplicationFormPage"
import LoginPage from "./components/LoginPage"
import TripDetailsPage from "./components/TripDetailsPage"
import CreateTripPage from "./components/CreateTripPage"

function App() {
  const { userName } = useState("Teste User");
  return (
    <div>
      <GloabalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/trips/list">
            <ListTripsPage name={userName} />
          </Route>

          <Route exact path="/trips/application">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/administrativePage">
            <AdminHomePage />
          </Route>

          <Route exact path="/admin/trips/list">
            <TripDetailsPage />
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
