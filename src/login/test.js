import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      courseExpress: [],
      username: "",
      password: ""
    };
  }

  handleLogin = () => {
    axios
      .post("http://localhost:5000/api/v1/login", {
        email: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Login Course Express</h1>
        <input
          type="text"
          placeholder="email"
          value={this.state.username}
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={e => {
            this.setState({
              password: e.target.value
            });
          }}
        />
        <button onClick={this.handleLogin}>Signin</button>
      </div>
    );
  }
}

export default Test;
