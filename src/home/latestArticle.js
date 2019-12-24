import React, { Component } from "react";
import axios from "axios";
import LatestList from "./latestList";

class LatestArticle extends Component {
  state = {
    articleList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/article/latest-article")
      .then(res => {
        this.setState({ articleList: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.articleList.map(article => (
            <LatestList
              key={article.id}
              title={article.title}
              category={article.categoryId.name}
              time={article.createdAt}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default LatestArticle;
