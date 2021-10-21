import React, { useState, useEffect } from "react";
import Header from "../../SharedContent/Header";
import {
  LoginPageStyle,
  LoginContainer,
  LoginButtonDisposition,
} from "../../SharedContent/StyleConfiguration";
import { useForm, apiAuthorization } from "../../SharedContent/Hooks";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {

  const usePostData = () => {
    let body = {
      email: form.email,
      password: form.password,
    };

        axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/login`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then( (response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/administrativePage");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const { form, inputChange } = useForm({
    email: "",
    password: "",
  });

  const history = useHistory();

  const goToHomePage = () => {
    history.push("/administrativepage");
  };

  const useRequestLogin = (event) => {
    event.preventDefault();
    console.log("prevented");
    const login = usePostData();
  };

  return (
    <LoginPageStyle>
      <Header
        handleLogedStatus={props.handleLogedStatus}
        logedStatus={props.logedStatus}
      />

      <LoginContainer>
        <div>
          <form onSubmit={useRequestLogin}>
            <div>
              <label>Email:</label>
              <input
                name="email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={form.email}
                title="Insert your email for login"
                onChange={inputChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                name="password"
                type="password"
                value={form.password}
                title="Inser your email for login"
                onChange={inputChange}
                required
              />
            </div>
            <LoginButtonDisposition>
              <button>Login</button>
            </LoginButtonDisposition>
          </form>
        </div>
      </LoginContainer>
    </LoginPageStyle>
  );
};

export default LoginPage;
