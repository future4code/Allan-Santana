import React, {useState} from "react";
import { baseURL, contentType } from "./Constants";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export async function sendUserDetails(body, argument) {
  switch (argument) {
    case 1:
      {
        try {
          let response = await axios.post(`${baseURL}/users/signup`, body, {
            headers: {
              contentType,
            },
          });
          localStorage.setItem("token", response.data.token);
          return response.data.token;
        } catch (error) {
          console.log(error);
        }
      }
      break;
    case 2:
      {
        try {
          let response = await axios.post(`${baseURL}/users/login`, body, {
            headers: {
              contentType,
            },
          });
          localStorage.setItem("token", response.data.token);
        } catch (error) {
          console.log(error);
        }
      }
      break;
    default:
      {
        alert("ERROR: Invalid request");
      }
      break;
  }
}

export const useHandleToken = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  return [token, setToken];
};

export const useFeedPosts = () => {
  const pathParams = useParams();
  const token = window.localStorage.getItem("token");
  const [isLoading, setLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const [commentList, setCommentList] = useState()

  const getData = async () => {
    try {
      let response = await axios.get(
        `${baseURL}/posts/?page=${pathParams.page}&size=${pathParams.numberOfPosts}`,
        {
          headers: {
            contentType,
            Authorization: token,
          },
        }
      );
      setPostData(response.data);
      console.log('data recebida', response.data);
      setLoading(false);
    } catch (error) {
      console.log("error message", error);
    }
  };

  const getCommentList = async (id) => {
    setLoading(true);
    console.log(commentList, '123123', object)
    try {
      let response = await axios.get(
        `${baseURL}/posts/${id}/comments`,
        {
          headers: {
            Authorization: token
          },
        }
      );
      const lol = {}
      lol[0] = commentList
      lol[1] = response.data
      console.log(lol, 'lolsadas')
      setCommentList(lol);
      console.log('data recebida', response.data);
      console.log('comentass', commentList);
      setLoading(false);
    } catch (error) {
      console.log("error message", error);
    }
  };

  return { isLoading, getData, postData, getCommentList, commentList, setCommentList };
};

