import React, { useEffect, useState } from "react";
import { useFeedPosts, getCommentList } from "../constants/axiosRequests";
import { useHistory, useParams } from "react-router";
import { PostContainer } from "../pages/FeedPage/FeedStyle";
import LikeIcon from "../img/likeIcon.png";
import likeIconFilled from "../img/likeIconFilled.png";
import dislikeIconFilled from "../img/dislikeIconFilled.png";
import dislikeIcon from "../img/dislikeIcon.png";

const PostsComponent = () => {
  const { isLoading, getData, postData, getCommentList, setCommentList } = useFeedPosts();
    const history = useHistory()

  const getPostComments = (id) =>{
    history.push(`/postPage/${id}`)
  }

  // const postData = getData()

  const mapPosts = () => {
    console.log(postData, "esse");
    const postList = postData.map((post) => {
        const object = post
      return (
        <PostContainer>
        <section key={post.id}>
          <div>
            <h5>User: {post.username}</h5>
            <p>
              <strong>{post.title}</strong>
            </p>
          </div>
          <p>{post.body}</p>
          <footer>
            <div>
            <img src={LikeIcon} />
            <p>{post.voteSum ? post.voteSum : 0}</p>
            <img sr={dislikeIcon} />
            </div>
            <div>
            <p onClick={() => {getPostComments(post.id)}}>{post.commentCount} comentários</p>
            </div>
          </footer>
        </section>
        </PostContainer>
      );
    });
    return postList;
  };

  useEffect(() => {
    // const getPostData = getData()
    console.log(postData);
    getData(postData);
  }, [isLoading]);

  return (
    <>
      {postData === null ? (
        <section>
          <h1>Loading...</h1>
        </section>
      ) : (
        mapPosts()
      )}
      {/* <button onClick={() => console.log(postData)}>see postdata</button> */}
    </>
  );
};

export default PostsComponent;
