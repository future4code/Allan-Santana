import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoginPageContainer } from "./LoginPageStyle";
import { useForm } from "../../hooks/Hooks";
import LoginComponent from "../../components/LoginComponent"
import SignUpComponent from "../../components/SignUpComponent";
import {getUserPOST} from '../../constants/axiosRequests'

const LoginPage = () => {
  const [signUp, setToSignup] = useState(false);
  // const [body, setBody] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // })

  const { form, inputChange } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const history = useHistory()

  const [token, setToken] = useState(window.localStorage.getItem('token'))

  useEffect(() => {
    if(token !== null){
        history.push('/feed/1/20')
    }
}, [token])

  const handleLoginSignup = (event) =>{
    event.preventDefault()
    if(signUp){
      const body = {
        username: form.username,
        email: form.email,
       password: form.password,
      }
      console.log('body1', body)
      getUserPOST(body, 1)
    }else{
      const body = {
        email: form.email,
        password: form.password,
      }
      console.log('body2', body)
      getUserPOST(body, 2)
    }

  }

  return (
    <LoginPageContainer>
      <form>
      {signUp ? 
      <SignUpComponent
      form = {form}
      inputChange = {inputChange}
      /> : 
      <LoginComponent
      form = {form}
      inputChange = {inputChange}
      />
        }
          {signUp ? (
            <div>
                <button onClick={(event) => {handleLoginSignup(event)}}>Register</button>
                <button onClick={() => setToSignup(false)}>Return</button>

            </div>
          ) : (
            <div>
              <button onClick={(event) => {handleLoginSignup(event)}}>Login</button>
              <button onClick={() => setToSignup(true)}>Signup</button>
            </div>
          )}
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;
