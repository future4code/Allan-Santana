import axios from 'axios'
import { useState, useEffect } from 'react';

// export const useRequestData = (url) => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios
//         .get(url)
//         .then((response) => {
//             setData(response.data.trips)} )
//         .catch((error) => console.log(error))
//     }, [url]);
//     return data;
// };



// export const usePostData = (url, body) => {
//     const [token, setToken] = useState([]);
//     const [didItWorked, setDidItWorked] = useState([]);

//     axios
//         .post(url, body,{
//             headers:{
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((response) => 
//         setToken(response.data.token),
//         localStorage.setItem("token", token),
//         setDidItWorked(true)
//         )
//         .catch((error) => 
//         console.log(error, 'error'),
//         setDidItWorked(false)
//         )

//     return (didItWorked, token);
// };

export const useForm = (initialState) =>{

    const [form, setForm] = useState(initialState)
    const inputChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    return {form, inputChange}
}

// Constants

export const apiAuthorization = "allan-gilber-maryam"