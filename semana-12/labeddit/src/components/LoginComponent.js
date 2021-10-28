import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/Hooks";

const LoginComponent = () => {

        const [signUp, setToSignup] = useState(false);
        const { form, inputChange } = useForm({
        //   email: "",
        //   password: "",
        });
  return (
    <>
      <div>
        <label>Login</label>
        <input
          type="email"
          name="email"
          pattern=""
          value={form.password}
          title="Insert your email."
          onChange={inputChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          pattern=""
          value={form.password}
          title="Insert your password."
          onChange={inputChange}
          required
        />
      </div>
    </>
  );
};

export default LoginComponent;
