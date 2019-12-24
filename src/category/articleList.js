import React, { Component } from "react";
import axios from "axios";
import CategoryArticle from "./categoryArticle";

class ArticleList extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  state = {
    articleData: []
  };

  componentDidMount() {
    const id = this.url;
    axios
      .get("http://localhost:5000/api/v1/category/" + id + "/articles")
      .then(res => {
        this.setState({ articleData: res.data.article });
        console.log("articleData");
      });
  }

  render() {
    return (
      <div>
        {this.state.articleData.map(article => (
          <CategoryArticle
            key={article.id}
            title={article.title}
            brief={article.brief}
            writers={article.author_id.name}
            time={article.createdAt}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
