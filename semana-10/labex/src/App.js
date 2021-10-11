import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { GloabalStyle } from "./components/Constants";
import TravelPage from "./components/TravelPage";
import AdministrativePage from "./components/AdministrativePage";

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':{
        return (
        <Home 
        setCurrentPage = {setCurrentPage}
        />
        )
      };

      case 'travelPage':{
        return(
          <TravelPage/>
        )
      };

      case 'administrativePage':{
        return(
          <AdministrativePage/>
        )
      }
    
      default:{
        <p>Something has gone terrible wrong..</p>
      }
    }
  }
  return (
    <div>
      <GloabalStyle />
      {renderPage()}
    </div>
  );
}

export default App;
