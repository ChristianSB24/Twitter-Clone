import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { PostsList } from './tweets/features/postsList'
import { AddPostForm } from './tweets/features/AddPostForm'
import { SinglePostPage } from './tweets/features/SinglePostPage'

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
