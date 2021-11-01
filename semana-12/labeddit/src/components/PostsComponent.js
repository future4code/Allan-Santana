import React, { useEffect } from "react";
import { useFeedPosts } from "../constants/axiosRequests";
import { useHistory } from "react-router";
import { PostContainer } from "../pages/FeedPage/FeedStyle";
import LikeIcon from "../img/likeIcon.png";
import likeIconFilled from "../img/likeIconFilled.png";
import dislikeIconFilled from "../img/dislikeIconFilled.png";
import dislikeIcon from "../img/dislikeIcon.png";

const PostsComponent = () => {
  const { getData, postData, postingNewContent, removeVote, postVote } = useFeedPosts();
    const history = useHistory()

  const getPostComments = (id) =>{
    history.push(`/postPage/${id}`)
  }

  useEffect(() => {
    if(!postData){
      getData()
    }
  }, [postData, getData]);

  useEffect(() => {
    if(!postingNewContent){
      getData()
    }
  }, [postingNewContent,getData]);

  const handleVote = (id, vote, postObject, type) =>{
    if(postObject.userVote === vote){
      removeVote(id, vote, postObject, type)
    } else{
    const tryToVote = postVote(id, vote, postObject, type)
    if(tryToVote){
      getData()
    }
    }
  }
  

    const postList = postData === null ? (
      <section>
        <h1>Loading...</h1>
      </section>
    ) : (postData.map((post) => {
      return (
        <PostContainer key={post.id}>
        <section>
          <div>
            <h5>User: {post.username}</h5>
            <p>
              <strong>{post.title}</strong>
            </p>
          </div>
          <p>{post.body}</p>
          <footer>
            <div>
            <img
            alt='Like icon'
            onClick={() => handleVote(post.id, 1, post)}
            src={post.userVote === 1 ? (likeIconFilled) : (LikeIcon)}
            />
            <p>{post.voteSum ? post.voteSum : 0}</p>
            <img 
            alt='Dislike icon'
            onClick={() => handleVote(post.id, -1, post)}
            src={post.userVote === -1 ? (dislikeIconFilled):(dislikeIcon)} 
            />
            </div>
            <div>
            <p onClick={() => {getPostComments(post.id)}}>{post.commentCount ? (post.commentCount) : (0)} comentários</p>
            </div>
          </footer>
        </section>
        </PostContainer>
    )}));

  return (
    <>
        {postList}
    </>
  );
};

export default PostsComponent;
