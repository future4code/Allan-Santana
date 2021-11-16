import React from "react";
import { useFeedPosts } from "../constants/axiosRequests";
import { PostContainer } from "../pages/FeedPage/FeedStyle";
import LikeIcon from "../img/likeIcon.png";
import likeIconFilled from "../img/likeIconFilled.png";
import dislikeIconFilled from "../img/dislikeIconFilled.png";
import dislikeIcon from "../img/dislikeIcon.png";

const UsersCommentsComponent = (props) => {
  const { postVote, removeVote } = useFeedPosts();

  const handleVote = (id, vote, postObject, type) => {
    if (postObject.userVote === vote) {
      removeVote(id, vote, postObject, type);
    } else {
      postVote(id, vote, postObject, type);
    }
  };

  const renderComments = () => {
    const listOfComments = props.commentList.map((comment) => {
      return (
        <PostContainer key={comment.id}>
          <section>
            <div>
              <h5>User: {comment.username}</h5>
              <p>
                <strong>{comment.title}</strong>
              </p>
            </div>
            <p>{comment.body}</p>
            <footer>
              <div>
                <img
                  alt="Like icon"
                  onClick={() => handleVote(comment.id, 1, comment, "comment")}
                  src={comment.userVote === 1 ? likeIconFilled : LikeIcon}
                />
                <p>{comment.voteSum ? comment.voteSum : 0}</p>
                <img
                  alt="Dislike icon"
                  onClick={() => handleVote(comment.id, -1, comment, "comment")}
                  src={
                    comment.userVote === -1 ? dislikeIconFilled : dislikeIcon
                  }
                />
              </div>
            </footer>
          </section>
        </PostContainer>
      );
    });
    return listOfComments;
  };
  return <>{renderComments()}</>;
};

export default UsersCommentsComponent;
