import React, { useState } from "react";
import { useForm } from "../hooks/Hooks";

const SignUpComponent = () => {
    const [signUp, setToSignup] = useState(false);
    const { form, inputChange } = useForm({
    //   email: "",
    //   password: "",
    // username: "",
    });

    return (
        <>
        <div>
          <label>User Name</label>
          <input
            type="text"         
            name="username"
            pattern=""
            value={form.username}
            title="Insert your userName."
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label>email</label>
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
            title="Type a new passowrd. (Your password must have a minimum of 8 and max of 30 caracters)"
            onChange={inputChange}
            required
          />
        </div>
      </>
    )
}

export default SignUpComponent
