import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import PostsComponent from '../../components/PostsComponent';
import {FeedContainer} from './FeedStyle'
import {useForm} from '../../hooks/Hooks'
import { useFeedPosts } from "../../constants/axiosRequests";

const Feed = () => {
    const history = useHistory()
    const { form, inputChange, cleanFields } = useForm({
        title: "",
        body: "",
      });

      const {
        getData,
        createPost,
        postingNewContent,
      } = useFeedPosts();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            history.replace('/')
        }
    }, [history])

    useEffect(() => {
          getData()
      }, [postingNewContent, getData]);

    const tryToCreatePost = (event) => {
        event.preventDefault()
        createPost(form.title, form.body)
        cleanFields()
    }

    return (
        <FeedContainer>
            <header>
                <form onSubmit={(event) => tryToCreatePost(event)}>
                <input 
                type="text"         
                name="title"
                value={form.title}
                title="Insert your post title."
                onChange={inputChange}
                placeholder='Insert your post title.'
                required
                />
                <textarea
                type="text"         
                name="body"
                value={form.body}
                title="Insert the text of your post."
                onChange={inputChange}
                placeholder='Insert the text of your post.'
                required
                />
                <button>
                    Postar
                </button>
                </form>
            </header>
            <PostsComponent/>
        </FeedContainer>
    )
}

export default Feed
