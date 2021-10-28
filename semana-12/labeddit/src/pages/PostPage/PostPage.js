import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import CommentsComponents from '../../components/CommentsComponents';
import PostsComponent from '../../components/PostsComponent';
import { PostPageStyle } from './PostPageStyle';


const PostPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.replace('/')
        }
    }, [history])

    return (
        <PostPageStyle>
            <PostsComponent/>
            <CommentsComponents/>
        </PostPageStyle>
    )
}

export default PostPage
