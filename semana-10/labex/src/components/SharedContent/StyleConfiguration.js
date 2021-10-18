import styled, { createGlobalStyle } from "styled-components";
import GalaxyImage from "../../img/backgroundNASAImages/6.jpg"

export const GloabalStyle = createGlobalStyle`
    body { 
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #202124;
    color: #bdc1c6;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      height: 100%;
      width: 100%;
    }
`;

export const GeneralContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const HomePageGeneralContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 80%;
`;

export const InitialOptionsContainer = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  width: 50%;
`;

export const ButtonDisposition = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 200px;
  :hover {
    transform: translateY(-0.25rem);
  }
  img {
    position: relative;
    height: 100%;
    width: 100%;
  }
  figcaption {
    text-align: center;
    margin: 8px 0;
  }
`;

export const HeaderStyle = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-weight: 800;
  background: rgb(32, 33, 36);
  background: linear-gradient(
    90deg,
    rgba(32, 33, 36, 1) 0%,
    rgba(9, 9, 121, 1) 34%
  );
  h1 {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 10%;
    height: 90%;
    margin: 0 40px;
    :hover{
      color: white;
    }
  }

  h1::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  h1:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }

  div {
    margin: 0 40px;
    width: initial;
  }

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    font-weight: 700;
    height: 100%;
    min-width: 10vw;
    margin-left: 20px;
    :hover{
      color: white;
    }
  }
  span::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  span:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
  img{
    background-color: white;
    border-radius: 50%;
    height: 40%;
    width:auto;
    margin: 0 5px;
  }
  p {
    text-align: center;
    margin: 0;
    :hover{
      color: white;
    }
  }

`;

export const TravelPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const DispostionOfListElements = styled.div`
display: flex;
min-width: 70%;
height: auto;
margin-top: 20px;
justify-content: center;
align-items: center;
gap: 20px;
@media screen and (max-width: 1100px){
  float: left;
  display: grid;
  grid-template-columns: repeat(2, 350px);
  grid-template-rows: minmax(300px 300px);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  /* overflow: auto; */
}
`

export const CardStyle = styled.div`
box-sizing: border-box;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 10%;
height: 100%;
min-width: 300px;
min-height: 350px;
background-color: gray;
background-image: url(${GalaxyImage});
background-size: cover;
color: white;
text-align: center;

:hover{
  transform: translateY(-0.25rem) scale(1.05, 1.05);
}

h3{
  box-sizing: border-box;
  font-weight: 800;
  text-align: center;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 15%;
  padding: 4px 20px;
  margin: 0;
  background-color: rgba(9,9,121,0.5);
}
p{
  font-weight: 600;
  margin: 0;
}
span{
  font-weight: 600;
  padding: 4px 20px;
}
div{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  max-height: 20%;
  padding: 4px 40px;
  background-color: rgba(9,9,121,0.5);
  text-align: center;
}
div:nth-child(2){
    background-color: transparent;
    height: 70%;
  }
`

//Application Form Page Style

export const ApplicationPageStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
button{
  box-sizing: border-box;
  cursor: pointer;
  width: 20%;
  height: 6%;
  min-width: 50px;
  min-height: auto;
  margin-bottom: 20px;
  font-style: inherit;
  font-size: 80%;
  font-weight: 800;
  color: #bdc1c6;
  background-color: rgba(9,9,121,1);
  border: none;
  border-radius: 8px;
  :hover{
    color: white;
    transform: translateY(-0.25rem) scale(1.05, 1.05);
  }
}
form{
  color: #202124;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  min-width: 480px;
  height: 80%;
  margin: 20px 0;
  background-color: white;
  }
`
export const NameAndProfessionInputsStyle = styled.div`
display: flex;
flex-direction: column !important;
justify-content: left !important;
width: 100%;
height: 10%;
max-height: 100px;
margin-top: 20px;
div{
  box-sizing: border-box;
  justify-content: left;
  padding: 0 20px;
  height: 50%;
}
div > label{
  width: 22%;
}
`

export const ApplicationFormJustification = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 80%;
input{
  height: 80%;
  width: 70%;
  text-align: start;
  text-justify: auto;
}
h3{
  margin: 0;
}
textarea{
  box-sizing: border-box;
  height: 80%;
  width: 90%;
  text-align: start;
  text-justify: auto;
  resize: none;
  padding: 12px;
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
}
`

export const CheckBoxStyle = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row !important;
justify-content: left;
width: 100%;
height: 100%; 
max-height: 50px;
padding: 0 20px;
label{
  width: 22%;
}
div{
  display: flex;
  justify-content: left;
  height: 100% !important;
  width: 78%;
  padding-left: 12px;
}
input{
  min-width: initial !important;
  height: 100% !important;
}
label{
  width: 20% !important;
}
`

// LoginPage Style

export const LoginPageStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
`

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90%;
width: 100%;
label{
  color: #202124;
  font-weight: 500;
  width: 30%;
  margin-right: 4px;
}
input{
  width: 70%;
}
div {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 30%;
width: 20%;
min-width: 300px;
min-height: auto;
padding: 20px;
background-color: white;
}
div> form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
}

div > form > div{
  display: flex;
  flex-direction: row;
  justify-content: left;
  height: auto;
  width: 100%;
  padding: 0;
}
`

export const LoginButtonDisposition = styled.div`
display: flex !important;
flex-direction: row !important;
justify-content: space-evenly !important;
height: 30% !important;
width: 100% !important;
min-height: 50px !important;
min-width: auto !important;
padding: 0 !important;
button{
  box-sizing: border-box;
  cursor: pointer;
  width: 30%;
  height: 40%;
  min-width: 50px;
  min-height: auto;
  font-style: inherit;
  font-size: 80%;
  font-weight: 800;
  color: #bdc1c6;
  background-color: rgba(9,9,121,1);
  border: none;
  border-radius: 8px;
  :hover{
    color: white;
    transform: translateY(-0.25rem) scale(1.05, 1.05);
  }
}
`
