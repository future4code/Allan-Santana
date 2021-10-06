import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Blackheart from '../img/blackheart.png';
import Whiteheart from '../img/whiteheart.png';
import ReturnIcon from '../img/returnIcon.png';
import ListOfUsersIcon from '../img/listOfUsersIcon.png';

const CurrentProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    min-height: 500px;
    /* width: 50%;
    height: 75%; */
    width: 50%;
    height: 75%;
    background-color: white;
    /* min-height: 50vh;
    min-width: 25vw; */
`
const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    img{
        max-width: 50px;
        max-height: 60px;
        width: 100%;
        height: 100%;
    }
`
const PhotoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
img{
    max-height: 60%;
    width: 90%;
}
`

const ButtonsDisposition = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        max-height: 50px;
        max-width: 60px;
        height: 100%;
        width: 100%;
    }
`

const Home = (props) => {

    const [currentPage, updateCurrentPage] = useState("home")
    const [heartImg, updateHeartImg] = useState({Whiteheart})
    const [user, setUser] = useState("testUser")
    const [profile, updateProfile] = useState({
        id: '',
        age: '',
        name: '',
        photo: '',
        bio: '',
    })

    function iconOfTheHeader (){
        if(currentPage === 'home'){
            return(
                <img 
                onClick={() => changeBetweenHomeAndListOfMatchs('listOfMatchs')} 
                src={ListOfUsersIcon}
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

    function profileBio(){

        return (
            <div>
                <strong>{profile.name}</strong> + ", " + <p>{profile.bio}</p>
            </div>
        )
        
    };

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
                    <div>

                        <Header>
                            <h3>AstroMatch 2.0</h3>
                            {iconOfTheHeader()}
                        </Header>

                        <PhotoStyle>
                            <img src={profile.photo} alt="Profile Photo"/>
                            {profileBio}
                        </PhotoStyle>

                        <ButtonsDisposition>
                            <img alt="Reject Button"
                            onClick={() => {matchThePerson(false)}} 
                            />

                            <img alt="Match Button" 
                            src={heartImg} 
                            onClick={() => {matchThePerson(true)}} 
                            onMouseOver={() => updateHeartImg({Blackheart})} 
                            onMouseOut={() => updateHeartImg({Whiteheart})}
                            />

                        </ButtonsDisposition>

                    </div>

            );
            case "listOfMatchs": return (

                <div>

                        <Header>
                            <h3>AstroMatch 2.0</h3>
                            {iconOfTheHeader()}
                        </Header>

                        <PhotoStyle>
                            <img src={profile.photo} alt="Profile Photo"/>
                            {profileBio}
                        </PhotoStyle>

                        <ButtonsDisposition>

                            <img alt="Reject Button"
                            src={Blackheart}
                            onClick={() => {matchThePerson(false)}} 
                            />

                            <img alt="Match Button" 
                            src={heartImg} 
                            onClick={() => {matchThePerson(true)}} 
                            onMouseOver={() => updateHeartImg({Blackheart})} 
                            onMouseOut={() => updateHeartImg({Whiteheart})}
                            />

                        </ButtonsDisposition>

                    </div>

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
