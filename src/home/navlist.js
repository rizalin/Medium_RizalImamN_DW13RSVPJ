import React, { Component } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class NavList extends Component {
  state = {
    navCat: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/categories")
      .then(res => {
        this.setState({ navCat: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state.navCat);
  }

  render() {
    return (
      <div>
        {this.state.navCat.map(category => (
          <Nav.Link
            href={`/category/?id=${category.id}`}
            style={{ width: "max-content" }}
          >
            {category.name}
          </Nav.Link>
        ))}
      </div>
    );
  }
}
