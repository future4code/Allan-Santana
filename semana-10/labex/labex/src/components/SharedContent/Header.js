import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import { HeaderStyle } from "../../components/SharedContent/StyleConfiguration";
import SignInIcon from "../../img/SignInIcon.png";

const Header = (props) => {

  useEffect(()=>{
    loginElement()
    window.localStorage.getItem("token")
  }, [window.localStorage.getItem("token")])

  let history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const loginElement = () => {

    const token = window.localStorage.getItem('token')

    if(token){
      return (
      <span onClick={() => handleLogedStatus()}>Welcome</span>
      )
    } else {
      return (
        <span onClick={() => handleLogedStatus()}>
          Click to Sign in <img src={SignInIcon} />
        </span>
      );
    }
  };

  const handleLogedStatus = () =>{
    const token = window.localStorage.getItem("token")
    if(!token){
      goToLoginPage()
    } else{
      if(window.confirm("Do you want to logout?") ){
        localStorage.removeItem("token")
        window.location.reload()
      }
    }
  }

  const renderHeader = () => {
    const token = window.localStorage.getItem("token")

    if (token) {
      return (
        <HeaderStyle>
          <h1 onClick={() => goToHomePage()}>LabeX</h1>
          <div>
            <span onClick={() => goToCreateTripPage()}>
              <p>Create New Trip</p>
            </span>
            <span onClick={() => handleLogedStatus()}>Welcome 'userName'</span>
          </div>
        </HeaderStyle>
      );
    } else {
      return (
        <HeaderStyle>
          <h1 onClick={() => goToHomePage()}>LabeX</h1>
          <div>
            <span onClick={() => handleLogedStatus()}>
              Click to Sign in <img src={SignInIcon} />
            </span>
          </div>
        </HeaderStyle>
      );
    }
  };

  return (
    renderHeader()
    )
};

export default Header;
