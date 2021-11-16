import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import UsersCommentsComponent from "../../components/UsersCommentsComponent";
import { PostPageStyle, PostContainer } from "./PostPageStyle";
import { useFeedPosts } from "../../constants/axiosRequests";
import LikeIcon from "../../img/likeIcon.png";
import likeIconFilled from "../../img/likeIconFilled.png";
import dislikeIconFilled from "../../img/dislikeIconFilled.png";
import dislikeIcon from "../../img/dislikeIcon.png";
import { useForm } from "../../hooks/Hooks";

const PostPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const {
    getData,
    postData,
    getCommentList,
    commentList,
    postVote,
    commentPost,
    removeVote,
  } = useFeedPosts();

  const { form, inputChange, cleanFields } = useForm({
    title: "",
    body: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.replace("/");
    }
  }, [history]);

  useEffect(() => {
    getData();
    getCommentList(pathParams.id);
  }, []);

  const handleVote = (id, vote, postObject, type) => {
    if (postObject.userVote === vote) {
      removeVote(id, vote, postObject, type);
    } else {
      postVote(id, vote, postObject, type);
    }
  };

  const renderPost = () => {
    const postObject = postData.filter((post) => {
      if (post.id === pathParams.id) {
        return true;
      } else{
        return false
      }
    });

    return (
      <PostContainer>
        <section key={postObject[0].id}>
          <div>
            <h5>User: {postObject[0].username}</h5>
            <p>
              <strong>{postObject[0].title}</strong>
            </p>
          </div>
          <p>{postObject[0].body}</p>
          <footer>
            <div>
              <img
              alt='Like button'
                onClick={() =>
                  handleVote(postObject[0].id, 1, postObject[0], "post")
                }
                src={postObject[0].userVote === 1 ? likeIconFilled : LikeIcon}
              />
              <p>{postObject[0].voteSum ? postObject[0].voteSum : 0}</p>
              <img
              alt='Dislike button'
                onClick={() =>
                  handleVote(postObject[0].id, -1, postObject[0], "post")
                }
                src={
                  postObject[0].userVote === -1
                    ? dislikeIconFilled
                    : dislikeIcon
                }
              />
            </div>
            <div>
              <p>
                {postObject[0].commentCount ? postObject[0].commentCount : 0}{" "}
                comentários
              </p>
            </div>
          </footer>
        </section>
      </PostContainer>
    );
  };

  const trytoComment = (event) => {
    event.preventDefault();
    commentPost(form.body, pathParams.id);
    cleanFields();
  };

  return (
    <>
      {postData && commentList ? (
        <PostPageStyle>
          {renderPost()}
          <form onSubmit={(event) => trytoComment(event)}>
            <textarea
              type="text"
              name="body"
              value={form.body}
              title="Insert your comment."
              onChange={inputChange}
              placeholder="Insert your comment."
              required
            />
            <button>Comentar</button>
          </form>
          <UsersCommentsComponent commentList={commentList} />
        </PostPageStyle>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default PostPage;
