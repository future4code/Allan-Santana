import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CommentsComponents from "../../components/CommentsComponents";
import PostsComponent from "../../components/PostsComponent";
import UsersCommentsComponent from "../../components/UsersCommentsComponent";
import { PostPageStyle } from "./PostPageStyle";
import { useFeedPosts } from "../../constants/axiosRequests";

const PostPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const { isLoading, getCommentList, commentList } = useFeedPosts();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.replace("/");
    }
  }, [history]);

  useEffect(() => {
    console.log('lista232', commentList)
    getCommentList(pathParams.id);
  }, []);

  useEffect(() => {
    console.log('lista232', commentList)
  }, [commentList]);

  return (
    <>
      {isLoading ? (
        "lol"
      ) : (
        <PostPageStyle>
          {/* <PostContainer>
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
                  <p onClick={() => getPostComments(post.id, post)}>
                    {post.commentCount} comentários
                  </p>
                </div>
              </footer>
            </section>
          </PostContainer> */}

          <UsersCommentsComponent />
        </PostPageStyle>
      )}
    </>
  );
};

export default PostPage;
