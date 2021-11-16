import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Feed from "../pages/FeedPage/Feed";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/postPage/:id?'>
          <PostPage />
        </Route>
        <Route exact path='/feed/:page?/:numberOfPosts?'>
          <Feed />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
