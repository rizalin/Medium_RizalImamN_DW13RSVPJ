import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './home'
import Category from './category/category';
import ArticleDetail from './article-detail/articleDetail';
import Story from './dropdown/story'
import NewStory from './dropdown/newStory'
import Bookmark from './dropdown/bookmark';
import Profile from './dropdown/profile';
import ArticleByPerson from './dropdown/articlebyperson'
import CommentSection from './article-detail/commentSection';
import Stats from './dropdown/stats'


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/articleDetail" component={ArticleDetail} />
            <Route path="/story" component={Story} />
            <Route path="/newStory" component={NewStory} />
            <Route path='/bookmark' component={Bookmark} />
            <Route path='/profile' component={Profile} />
            <Route path="/articlebyperson" component={ArticleByPerson} />
            <Route path="/commentSection" component={CommentSection} />
            <Route path="/stats" component={Stats} />
          </Switch>
        </Router>

      </div>

    );
  }
}

export default App;