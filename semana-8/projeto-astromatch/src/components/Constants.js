import styled, { createGlobalStyle } from "styled-components";

// Shared Styles
export const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        background-color: lightgray;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
    }
`;
export const StyleForUserManagement = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  background-color: white;
  padding: 12px;
  cursor: default;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  p {
    margin: 0;
    margin: 0 5px;
    cursor: text;
  }
  div > input {
    background-color: white;
    text-align: left;
    border-width: 0.1px;
  }
  div > button {
    position: static;
    margin: 0 0 0 5px;
    background-color: lightblue;
    height: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 10%;
  border: solid lightgray;
  border-width: 0 0 0.1px 0;
  img {
    max-width: 10%;
    max-height: 80%;
    cursor: pointer;
  }
`;

// Styles from Home component

export const CurrentProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  margin: auto;
  border-radius: 3px;
  button {
    box-sizing: content-box;
    position: absolute;
    bottom: 20px;
    right: 10px;
    border: none;
    border-radius: 3px;
    background-color: white;
    padding: 4px;
    cursor: pointer;
  }
`;

export const ActualProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 300px;
  background-color: white;
  width: 25%;
  height: 75%;
  border-radius: 3px;
`;

export const PhotoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  position: relative;
  margin: 12px 0;
  overflow: hidden;
  img {
    border-radius: 3px;
    max-width: 100%;
    height: 100%;
    width: 90%;
    -webkit-box-shadow: 0px 0px 32px -8px rgba(0, 0, 0, 0.71);
    box-shadow: 0px 0px 32px -8px rgba(0, 0, 0, 0.71);
  }
  figcaption {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 90%;
    margin: 0;
    padding: 4px 18px;
    min-height: 10%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  p {
    box-sizing: border-box;
    color: black;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsDisposition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
  padding: 10px 0;
  img {
    max-height: 50px;
    max-width: 60px;
    height: 80%;
    width: 50%;
    min-width: unset;
    margin: 0;
    cursor: pointer;
  }
`;

// Styles for ListOfMatchs

export const ListOfMatchsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-width: 300px;
  background-color: white;
  width: 25%;
  min-height: 75%;
  border-radius: 3px;
`;

export const ListOfMatchsStyle = styled.div`
  width: 100%;
  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: unset;
    width: 100%;
    margin: 5px 0;
    cursor: pointer;
  }
  div:hover {
    background-color: white;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    width: 101%;
    margin: 1px 0;
  }
  img {
    width: 10%;
    height: 50px;
    min-width: 50px;
    max-height: 50px;
    width: 10%;
    margin: 5px 0;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
  }
  div > p {
    width: 60%;
    font-weight: 800;
  }
`;
