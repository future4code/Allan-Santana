import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";



const RegisterPage = () => {

    const history = useHistory()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.replace('/')
        }
    }, [history])

    return (
        <div>
            
        </div>
    )
}

export default RegisterPage
