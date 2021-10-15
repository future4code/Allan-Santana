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
    margin: 0 4px;
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
display: grid;
grid-template-columns: 350px 350px;
grid-template-rows: 300px 300px 300px; 
gap: 12px;
margin-top: 20px;
`

export const CardStyle = styled.div`
box-sizing: border-box;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 100%;
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
color: #202124;
form{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 80%;
  margin: 20px 0;
  background-color: white;
  div{
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 30%;
    :nth-child(2){
      height: 50%;
    }
  }
  div > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding: 20px;
  }

  div > div >input{
    min-width: 200px;
    margin-left: 8px;
  }
  /* input{
    min-width: 200px;
    margin-left: 8px;
  } */
}
`

export const CheckBoxStyle = styled.div`
display: flex;
flex-direction: row !important;
justify-content: left;
width: 100%;
height: 100%; 
min-height: 100px;
label{
  width: 30%;
}
div{
  display: flex;
  justify-content: left;
  height: 100% !important;
  padding: 0;
}
input{
  min-width: initial !important;
  height: 100% !important;
}
label{
  width: fit-content !important;
}
`

// Constants

export const apiAuthorization = "allan-gilber-maryam"