import React, { Component } from "react";
import axios from "axios";
import ArtDetail from "./artDetail";
import RelatedArticle from "./articlemap";

class DetailMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  state = {
    articleData: [],
    userData: []
  };

  componentDidMount() {
    const id = this.url;
    axios.get("http://localhost:5000/api/v1/article/" + id, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE1NzcxMTM5Njl9.NtmEDiwg4k0B9EJ5al3KGlIivQKIo63_tuz0oR5Qd2Y'
      }
    }).then(res => {
      this.setState({ articleData: res.data });
      this.setState({ userData: res.data.authorId });
      console.log("articleData");
    });
  }

  render() {
    const { articleData, userData } = this.state;
    return (
      <div>
        <ArtDetail
          key={articleData.id}
          title={articleData.title}
          content={articleData.content}
          writer={userData.name}
          time={articleData.createdAt}
          id={articleData.category_id}
        />
        <RelatedArticle url={articleData.category_id} />
      </div>
    );
  }
}

export default DetailMap;
