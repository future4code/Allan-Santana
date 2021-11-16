import React from "react";

const SignUpComponent = (props) => {

    return (
        <>
        <div>
          <label>User Name</label>
          <input
            type="text"         
            name="username"
            pattern=""
            value={props.form.username}
            title="Insert your userName."
            onChange={props.inputChange}
            required
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            pattern=""
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
            pattern=""
            value={props.form.password}
            title="Type a new passowrd. (Your password must have a minimum of 8 and max of 30 caracters)"
            onChange={props.inputChange}
            required
          />
        </div>
      </>
    )
}

export default SignUpComponent
