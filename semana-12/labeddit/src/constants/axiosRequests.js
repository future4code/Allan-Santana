import { useState } from "react";
import { baseURL, contentType } from "./Constants";
import axios from "axios";
import { useParams } from "react-router-dom";

export async function sendUserDetails(body, argument) {
  switch (argument) {
    case 1:
      try {
        let response = await axios.post(`${baseURL}/users/signup`, body, {
          headers: {
            contentType,
          },
        });
        localStorage.setItem("token", response.data.token);
        return response.data.token;
      } catch (error) {
        alert(error);
      }
      break;
    case 2:
      try {
        let response = await axios.post(`${baseURL}/users/login`, body, {
          headers: {
            contentType,
          },
        });
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        alert(error);
      }
      break;
    default:
      alert("ERROR: Invalid request");
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
  const [commentList, setCommentList] = useState();
  const [postDetails, setPostDetails] = useState();

  const postVote = async (id, vote, postInfo, type) => {
    const body = {
      direction: vote,
    };
    const makeBaseUrl = () => {
      if ("comment" === type) {
        return `${baseURL}/comments/${id}/votes`;
      } else {
        return `${baseURL}/posts/${id}/votes`;
      }
    };
    try {
      await axios.put(makeBaseUrl(), body, {
        headers: {
          contentType,
          Authorization: token,
        },
      });
      window.location.reload();
    } catch (error) {
      alert("error message", error);
    }
  };

  const removeVote = async (id, vote, postInfo, type) => {
    const makeBaseUrl = () => {
      if ("comment" === type) {
        return `${baseURL}/comments/${id}/votes`;
      } else {
        return `${baseURL}/posts/${id}/votes`;
      }
    };
    try {
      await axios.delete(makeBaseUrl(), {
        headers: {
          Authorization: token,
        },
      });
      window.location.reload();
    } catch (error) {
      alert("error message", error);
    }
  };

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
    } catch (error) {
      alert(error);
    }
  };

  const getCommentList = async (id, object) => {
    axios
      .get(`${baseURL}/posts/${id}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setCommentList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const commentPost = async (text, id) => {
    const body = {
      body: text,
    };

    try {
      let response = await axios.post(`${baseURL}/posts/${id}/comments`, body, {
        headers: {
          contentType,
          Authorization: token,
        },
      });
      alert(response.data);
      window.location.reload();
    } catch (error) {}
  };

  const createPost = async (title, text) => {
    const body = {
      title: title,
      body: text,
    };
    try {
      let response = await axios.post(`${baseURL}/posts/`, body, {
        headers: {
          contentType,
          Authorization: token,
        },
      });
      alert(response.data);
      window.location.reload();
    } catch (error) {}
  };

  return {
    isLoading,
    setLoading,
    getData,
    postData,
    getCommentList,
    commentList,
    setCommentList,
    postDetails,
    setPostDetails,
    postVote,
    createPost,
    commentPost,
    removeVote,
  };
};
