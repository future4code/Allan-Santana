import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginPageContainer } from "./LoginPageStyle";
import { useForm } from "../../hooks/Hooks";
import LoginComponent from "../../components/LoginComponent"
import SignUpComponent from "../../components/SignUpComponent";

const LoginPage = () => {
  const [signUp, setToSignup] = useState(false);
  const { form, inputChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <LoginPageContainer>
      <form>
      {signUp ? 
      <SignUpComponent/> : 
      <LoginComponent
        />
        }
          {signUp ? (
            <div>
                <button >Register</button>
                <button onClick={() => setToSignup(false)}>Return</button>

            </div>
          ) : (
            <div>
              <button>Login</button>
              <button onClick={() => setToSignup(true)}>Signup</button>
            </div>
          )}
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;
