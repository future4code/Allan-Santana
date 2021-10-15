import axios from 'axios'
import { useState, useEffect } from 'react';

export const useRequestData = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            console.log(response.data.trips, "requisição") 
            setData(response.data.trips)} )
        .catch((error) => console.log(error))
    }, [url]);
    console.log(data)
    return data;
};

export const usePostData = (url, initialState) => {
    const {data, setData} = useState(initialState)

    useEffect(() => {
        axios
        .post(url)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [url]);

    return data;
};



