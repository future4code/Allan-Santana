import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import Feed from "../pages/FeedPage/Feed";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const Router = () => {

    const history = useHistory()

    function goToLoginPage(){
        history.push("/");
      }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/postPage'>
          <PostPage />
        </Route>
        <Route exact path='/registerPage'>
          <RegisterPage />
        </Route>
        <Route exact path='/feed/:page?/:numberOfPosts?'>
          <Feed />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
