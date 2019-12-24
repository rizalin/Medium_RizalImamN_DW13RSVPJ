import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./articlelist";

class ArticleMap extends Component {
  state = {
    articleList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/articles")
      .then(res => {
        this.setState({ articleList: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.articleList.map(article => (
          <ArticleList
            key={article.id}
            title={article.title}
            brief={article.brief}
            category={article.categoryId.name}
            writers={article.authorId.name}
            time={article.createdAt}
          />
        ))}
      </div>
    );
  }
}

export default ArticleMap;
