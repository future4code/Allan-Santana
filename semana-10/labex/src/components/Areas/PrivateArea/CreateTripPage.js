import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'


const CreateTripPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.push('/login')
        }
    }, [history])

    return (
        <div>
            <p>Hello CreateTripPage.js</p>
        </div>
    )
}

export default CreateTripPage


