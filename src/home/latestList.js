import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import moment from "moment";

function LatestList(props) {
  const dates = new Date(props.time);
  const date = moment(dates).format("MMM DD");
  return (
    <li>
      <h5>{props.title}</h5>
      <p>
        <span className="black">
          {props.writers} in {props.category}
        </span>
        <br></br>
        {date} . 3 min read
      </p>
    </li>
  );
}

export default LatestList;
