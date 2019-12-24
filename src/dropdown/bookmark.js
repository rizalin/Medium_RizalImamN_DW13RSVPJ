import React, { Component } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderMedium from "./../header/headermedium";

class Bookmark extends Component {
  render() {
    return (
      <div>
        <div className="headerN">
          <HeaderMedium />
        </div>
        <div className="kontainers bookmark" style={{ paddingTop: "50px" }}>
          <h2>Bookmarks</h2>
          <br></br>
          <Row
            style={{ border: "solid 1px #E5E5E5", padding: "20px" }}
            className="justify-content-between"
          >
            <Col style={{ maxWidth: "37%" }}>
              <Row className="justify-content-between">
                <BookmarkIcon
                  style={{ fontSize: "30px", alignSelf: "center" }}
                />
                <h2 style={{ color: "#E5E5E5", fontWeight: "100" }}>|</h2>
                <h2 style={{ fontWeight: "100" }}> Offline reading is here</h2>
              </Row>
            </Col>
            <Col sm={1} style={{ marginRight: "10px", alignSelf: "center" }}>
              <Button variant="dark">Upgrade</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Bookmark;
