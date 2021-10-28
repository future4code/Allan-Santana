import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import PostsComponent from '../../components/PostsComponent';
import {FeedContainer} from './FeedStyle'

const Feed = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.replace('/')
        }
    }, [history])
    
    return (
        <FeedContainer>
            <header>
                <input/>
                <button>
                    Postar
                </button>
            </header>
            <PostsComponent/>
        </FeedContainer>
    )
}

export default Feed
