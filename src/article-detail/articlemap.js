import React, { Component } from "react";
import axios from "axios";
import { Row, Card, Col } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class RelatedArticle extends Component {
  id = this.props.url

  state = {
    navCat: []
  };

  componentDidMount() {
    const link = this.id;
    axios
      .get("http://localhost:5000/api/v1/category/" + link + "/related")
      .then(res => {
        this.setState({ navCat: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state.navCat);
  }

  render() {
    const { navCat } = this.state;
    navCat.length = 3;
    return (
      <Row className="kontainers">
        {this.state.navCat.map(category => (
          <Col>
            <Card style={{ border: "none" }}>
              <h4>More from Mission.org</h4>
              <Card.Img
                variant="top"
                src={"https://imgur.com/download/fEslAxG"}
              />
              <Card.Body className="related">
                <h2>{category.title}</h2>
                <Row
                  className="justify-content-between"
                  style={{ marginTop: "20px" }}
                >
                  <Col md={8}>
                    <Row>
                      <Avatar
                        style={{
                          fontSize: "15px",
                          height: "40px",
                          width: "40px",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                      >
                        H
                      </Avatar>
                      <div style={{ paddingTop: 3 }}>
                        <h5>{category.authorId.name} in Mission.org</h5>
                        <h5 className="time">Jan 7,2019 . 5 min read</h5>
                      </div>
                    </Row>
                  </Col>
                  <Col md={3}>
                    <Row
                      style={{ marginTop: "10px", marginRight: "5px" }}
                      className="justify-content-between"
                    >
                      <ThumbUpIcon style={{ fontSize: 22 }} />
                      <h5>23k</h5>
                      <h4 style={{ fontSize: "20px", fontWeight: "300" }}>
                        {" "}
                        |{" "}
                      </h4>
                      <BookmarkBorderIcon
                        style={{ fontSize: 22, marginLeft: "5px" }}
                      />
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
