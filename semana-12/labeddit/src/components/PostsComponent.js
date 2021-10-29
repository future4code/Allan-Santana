import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { useFeedPosts } from '../constants/axiosRequests'
import { useParams } from 'react-router';

const PostsComponent = () => {

    const pathParams = useParams()

    const [feedPosts, setFeedPosts] = useState([null])

    const postData = useFeedPosts()

    // useEffect(() =>{
    //     // const getPostData = useFeedPosts()
    //     setFeedPosts(useFeedPosts())
    // }, [setFeedPosts, feedPosts])

    return (
        <div>
            <button onClick={() => console.log(feedPosts)}>see postdata</button>
        </div>
    )
}

export default PostsComponent
