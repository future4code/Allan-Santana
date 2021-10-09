import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Blackheart from '../img/blackheart.png';
import Whiteheart from '../img/whiteheart.png';
import ReturnIcon from '../img/returnIcon.png';
import RejectIconBw from '../img/rejectIconBW.png';
import RejectIconColored from '../img/rejectIconColored.png';
import ListOfUsersIconBW from '../img/listOfUsersIconBW.png';
import ListOfUsersIconColored from '../img/listOfUsersIconColored.png';
import ListOfMatchs from './ListOfMatchs';
import {ButtonsDisposition, Header, PhotoStyle, CurrentProfileContainer, ActualProfile} from './Constants';

const Home = () => {

    const [currentPage, updateCurrentPage] = useState("home")
    const [heartImg, updateHeartImg] = useState("Whiteheart")
    const [rejectImg, updateRejectImg] = useState("RejectIconBw")
    const [listIconImg, updatelistIconImg] = useState("listOfUsersIconBW")
    const [user, setUser] = useState("testUser")
    const [listOfMatchs, updateListOfMatchs] = useState({});
    const [profile, updateProfile] = useState({
        id: '',
        age: '',
        name: '',
        photo: '',
        bio: '',
    })

    function returnMatchIcon(){
        if (heartImg === "Whiteheart"){
            return Whiteheart
        } else{
            return Blackheart
        }
    }

    function returnRejectIcon(){
        if (rejectImg === "RejectIconBw"){
            return RejectIconBw
        } else{
            return RejectIconColored
        }

    }

    function returnListIcon(){
        if (listIconImg === "listOfUsersIconBW"){
            return ListOfUsersIconBW
        } else{
            return ListOfUsersIconColored
        }

    }

    function iconOfTheHeader (){
        if(currentPage === 'home'){
            return(
                <img 
                onClick={() => changeBetweenHomeAndListOfMatchs('listOfMatchs')} 
                src={returnListIcon()} 
                onMouseOver={() => updatelistIconImg("listOfUsersIconColored")} 
                onMouseOut={() => updatelistIconImg("listOfUsersIconBW")}
                />
            )
        } else{
            return(
                <img 
                onClick={() => changeBetweenHomeAndListOfMatchs('home')}
                src={ReturnIcon}
                />
            )
        }
    }

    function changeBetweenHomeAndListOfMatchs (pageName){
    
        updateCurrentPage(pageName)
    
    }

    function getProfile(){
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/person`)
        .then( response => {
            updateProfile(response.data.profile)
            console.log(profile)
        })
        .catch(err => {
            console.log(err)
        });
    }

    function getMatches(){
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/matches`)
        .then( response => {
            console.log(response, "esse daq")
            updateListOfMatchs(response.data.matches)
        })
        .catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {getMatches()}, [])

    function matchThePerson(boolean) {
        const body = {
            id: profile.id,
            choice: boolean
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/choose-person`, body)
        .then( response => {
            console.log(response)
            getProfile()
            if(boolean){
                alert("Tentativa de Match registrada!")
            } else{
                alert("Perfil rejeitado com sucesso.")
            }
            
        })
        .catch(err => {
            alert(err)
            console.log(err)
        });
    }

    function cleanHistoryOfMatchesAndSwipes(){
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/clear`)
        .then( response => {
            alert(response.data.message)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    function matchThePerson(boolean) {
        const body = {
            id: profile.id,
            choice: boolean
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/choose-person`, body)
        .then( response => {
            console.log(response)
            getProfile()
            if(boolean){
                alert("Tentativa de Match registrada!")
            } else{
                alert("Perfil rejeitado com sucesso.")
            }
        })
        .catch(err => {
            alert(err)
            console.log(err)
        });

    }

    useEffect(() => {getProfile()}, [user])

    function renderizePage(){
        switch(currentPage){
            case "home": return (
                    <ActualProfile>

                        <Header>
                            <h3>AstroMatch 2.0</h3>
                            {iconOfTheHeader()}
                        </Header>

                        <PhotoStyle>
                            <img src={profile.photo} alt="Profile Photo"/>
                            {/* <p><strong>{profile.name}</strong>{profile.bio}</p> */}
                        </PhotoStyle>

                        <ButtonsDisposition>
                            <img alt="Reject Button"
                            onClick={() => {matchThePerson(false)}}
                            src={returnRejectIcon()} 
                            onMouseOver={() => updateRejectImg("RejectIconColored")} 
                            onMouseOut={() => updateRejectImg("RejectIconBw")} 
                            />

                            <img alt="Match Button" 
                            src={returnMatchIcon()} 
                            onClick={() => {matchThePerson(true)}} 
                            onMouseOver={() => updateHeartImg("Blackheart")} 
                            onMouseOut={() => updateHeartImg("Whiteheart")}
                            />

                        </ButtonsDisposition>

                    </ActualProfile>

            );
            case "listOfMatchs": return (

           <ListOfMatchs
            user={user}
            iconOfTheHeader={iconOfTheHeader()}
            listOfMatchs = {listOfMatchs}
           />

            );      
            
        }
    }
        return (

            <CurrentProfileContainer>
                {renderizePage()}
                <button onClick={() => cleanHistoryOfMatchesAndSwipes()}>Limpar swipes e matches</button>
            </CurrentProfileContainer>

        )
    }

export default Home
