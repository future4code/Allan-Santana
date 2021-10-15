import React, {useEffect} from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { HeaderStyle } from "../../components/SharedContent/StyleConfiguration";
import SignInIcon from "../../img/SignInIcon.png"

const Header = (props) => {
  const [ logedStatus, setLogedStatus ] = useState(false);

    const history = useHistory()

  const returnToLastPage = () =>{
    history.goBack()
  }

  const goToHomePage = () =>{
    history.push("/")
  }
  
  const handleLogedStatus = () =>{
    console.log("handlestatus")
    setLogedStatus(!logedStatus)
    loginElement()
  }
  const loginElement = () => {
    if (logedStatus === true) {
      return (
      <span onClick={() => handleLogedStatus()}>
        Welcome lol
        </span>);
    } else {
      return (
      <span onClick={() => handleLogedStatus()}>
        Click to Sign in <img src={SignInIcon}/>
      </span>);
    }
  }

  useEffect(() => {
    loginElement()
    console.log("effect")
    console.log(logedStatus)
  }, [logedStatus, loginElement])

  return (
    <HeaderStyle>
      <h1 onClick={() => goToHomePage()}>LabeX</h1>
      <div>
        <span onClick={() => returnToLastPage()}>
          <p>Return</p>
        </span>
        {loginElement()}
      </div>
    </HeaderStyle>
  );
};

export default Header;
