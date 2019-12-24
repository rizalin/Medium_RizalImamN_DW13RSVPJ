import React from "react";
import { Media } from "react-bootstrap";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function CategoryArticle(props) {
  const dates = new Date(props.time);
  const date = moment(dates).format("MMM DD");
  return (
    <Media className="kontenSm">
      <Media.Body style={{ marginRight: "20px" }}>
        <h2>{props.title}</h2>
        <p>{props.brief}</p>
        <h6 class="writerR">{props.writers}</h6>
        <h6>{date}. 5 min read</h6>
      </Media.Body>
      <img src="https://imgur.com/download/NCckh7t" alt="Generic placeholder" />
    </Media>
  );
}

export default CategoryArticle;
