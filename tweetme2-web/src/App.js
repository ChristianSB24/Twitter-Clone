import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { PostsList } from './tweets/features/posts/postsList2'
import { AddPostForm } from './tweets/features/posts/AddPostForm'
import { SinglePostPage } from './tweets/features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
            />
            <Route exact path="/posts/:postId" component={SinglePostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
