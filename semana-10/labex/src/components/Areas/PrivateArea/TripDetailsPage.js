import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiAuthorization } from '../../SharedContent/Hooks'
import Headers from "../../SharedContent/Header"
import { ApplicationPageStyle } from "../../SharedContent/StyleConfiguration"

const TripDetailsPage = (props) => {
    const history = useHistory();
    const pathParams = useParams();

    const token = window.localStorage.getItem("token");

    const getTripDetails = axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trip/${pathParams.id}`,
    {
        headers: {
            "auth": token
        },
    })
    .then((response) => {
        console.log(response.data.trip, 'data');
        return (response.data.trip)
    })
    .catch((error) => {
        alert("error!", error);
    })

    const RenderTripDetails = () => {
        if(getTripDetails){
        const tripsMapping = getTripDetails.map((tripDetail)=>{
            return(
                <div>
                    <p>{tripDetail.planet}</p>
                    <p>{tripDetail.durationInDays}</p>
                    <p>{tripDetail.date}</p>
                    <p>{tripDetail.name}</p>
                    <p>{tripDetail.description}</p>
                    <p>{tripDetail.candidates}</p>
                </div>
            )
        })
        return tripsMapping;
        } else{
            return(
                <h1>Loading...</h1>
            )
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.push('/login')
        }
    }, [history]);
        
        console.log(getTripDetails, "aq")

    // useEffect( async () => {
    
    // }, [ tripDetails, RenderTripDetails])

    console.log(getTripDetails, 'detalhes')

    return (
        <ApplicationPageStyle>
            <Headers
            />
            {RenderTripDetails()}
        </ApplicationPageStyle>
    )
}

export default TripDetailsPage
