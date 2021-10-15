import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/Areas/PublicArea/HomePage";
import { GloabalStyle } from "./components/SharedContent/StyleConfiguration";
import ListTripsPage from "./components/Areas/PublicArea/ListTripsPage";
import AdminHomePage from "./components/Areas/PrivateArea/AdminHomePage";
import ApplicationFormPage from "./components/Areas/PublicArea/ApplicationFormPage"
import LoginPage from "./components/Areas/PrivateArea/LoginPage"
import TripDetailsPage from "./components/Areas/PrivateArea/TripDetailsPage"
import CreateTripPage from "./components/Areas/PrivateArea/CreateTripPage"

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
