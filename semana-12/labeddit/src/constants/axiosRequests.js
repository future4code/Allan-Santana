import {baseURL, contentType} from './Constants';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export async function getUserPOST(body,argument) {

    switch(argument){
        case 1:{
        try {
            let response = await axios.post(`${baseURL}/users/signup`, body, {
                headers:{
                contentType
            }
        })
        localStorage.setItem('token', response.data.token)
        }catch(error){
            console.log(error)
        }
    } break
    case 2:{
        try {
            let response = await axios.post(`${baseURL}/users/login`, body, {
            headers:{
            contentType
            }
        })
        localStorage.setItem('token', response.data.token)
        console.log(response)
        }catch(error){
        console.log(error)
        }
    }  break
    default: {
        alert('ERROR: Invalid request')
    } break
}
}

export async function useFeedPosts(){
    const pathParams = useParams()

    const token = window.localStorage.getItem('token')

    try {
        let response = await axios.get(`${baseURL}/posts`,{
            params: {
                page: pathParams.page,
                size:pathParams.numberOfPosts,
            }
        }, {
            headers:{
            contentType,
            'Authorization': token 
        }
    })
    console.log(response.data)
    return response.data
    }catch(error){
        console.log('error message', error)
    }
}