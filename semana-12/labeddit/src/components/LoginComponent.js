import React from "react";

const LoginComponent = (props) => {

  return (
    <>
      <div>
        <label>Login</label>
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={props.form.email}
          title="Insert your email."
          onChange={props.inputChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          pattern=".{8,32}"
          value={props.form.password}
          title="Insert your password."
          onChange={props.inputChange}
          required
        />
      </div>
    </>
  );
};

export default LoginComponent;
