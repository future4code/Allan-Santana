import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginPageContainer } from "./LoginPageStyle";
import { useForm } from "../../hooks/Hooks";
import LoginComponent from "../../components/LoginComponent";
import SignUpComponent from "../../components/SignUpComponent";
import { sendUserDetails } from "../../constants/axiosRequests";

const LoginPage = () => {
  const [signUp, setToSignup] = useState(false);
  const history = useHistory();

  const { form, inputChange } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleLoginSignup = async (event) => {
    event.preventDefault();
    if (signUp) {
      const body = {
        username: form.username,
        email: form.email,
        password: form.password,
      };
      await sendUserDetails(body, 1);
      history.push("/feed");
    } else {
      const body = {
        email: form.email,
        password: form.password,
      };
      await sendUserDetails(body, 2);
      history.push("/feed/1/20");
    }
  };

  return (
    <LoginPageContainer>
      <form>
        {signUp ? (
          <SignUpComponent form={form} inputChange={inputChange} />
        ) : (
          <LoginComponent form={form} inputChange={inputChange} />
        )}
        {signUp ? (
          <div>
            <button
              onClick={(event) => {
                handleLoginSignup(event);
              }}
            >
              Register
            </button>
            <button onClick={() => setToSignup(false)}>Return</button>
          </div>
        ) : (
          <div>
            <button
              onClick={(event) => {
                handleLoginSignup(event);
              }}
            >
              Login
            </button>
            <button onClick={() => setToSignup(true)}>Signup</button>
          </div>
        )}
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;
