import React from "react";
import { useState } from "react";
import { HeaderStyle } from "./StyleConfiguration";

const Header = (props) => {
  const [ logedStatus, setLogedStatus ] = useState(false);

  function loginElement() {
    if (logedStatus === true) {
      return <button>Welcome lol</button>;
    } else {
      return <button>Click to Sign in</button>;
    }
  }
  return (
    <HeaderStyle>
      <h1>LabeX</h1>
      <div>
        <button onClick={() => setLogedStatus(!logedStatus)}>
          <p>return</p>
        </button>
        {loginElement()}
      </div>
    </HeaderStyle>
  );
};

export default Header;
