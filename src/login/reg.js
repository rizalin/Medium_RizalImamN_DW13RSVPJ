import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography
} from "@material-ui/core";
import { Button } from "react-bootstrap";
import "./App.css";
import Login from "./login";
import axios from "axios";

const useStyles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
    textAlign: "center",
    flexDirection: "row",
    display: "flex"
  },
  isiContent: {
    width: "500px",
    marginTop: "5px",
    padding: "0px 50px"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
      display: "block",
      textAlign: "center"
    }
  }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      open: false
    };
  }

  // handleChange = event => {
  //   const input = event.target;
  //   const value = input.value;

  //   this.setState({ [input]: value });
  // };

  handleRegister = () => {
    axios
      .post("http://localhost:5000/api/v1/register", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    // const handleClose = () => {
    //   setOpen(false);
    // };

    return (
      <div>
        <Button
          type="button"
          onClick={this.handleOpen}
          variant="outline-success"
          size="sm"
        >
          Login
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          open={this.state.open}
          BackdropProps={{
            timeout: 500
          }}
        >
          <div className={classes.paper}>
            <div>
              <img
                src={
                  "https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png"
                }
                alt="placeholder"
              />
            </div>
            <div className={classes.isiContent}>
              <h1 id="transition-modal-title" style={{ margin: "10px" }}>
                Join Medium.
              </h1>
              <p
                id="transition-modal-description"
                style={{ fontSize: "14px", color: "#757575" }}
              >
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                your love.
              </p>

              <div className={classes.root}>
                <TextField
                  id="standard-basic"
                  label="Your Username"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({
                      username: e.target.value
                    });
                  }}
                />
                <TextField
                  id="standard-password-input"
                  label="Your password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({
                      email: e.target.value
                    });
                  }}
                />
                <br></br>
                <br></br>
                <button
                  type="submit"
                  variant="dark"
                  onClick={this.handleRegister}
                >
                  Registration
                </button>
              </div>
              <br></br>
              <p style={{ fontWeight: "bold" }}>
                Already have an account? <Login />{" "}
              </p>
              <p style={{ fontSize: "14px", color: "#757575" }}>
                To make Medium work, we log user data and share it with service
                provider. Click "Sign Up" above to accept Medium's{" "}
                <u>Term of Service</u> and <u>Privacy Policy.</u>
              </p>
            </div>
            <div>
              <img
                src={
                  "https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"
                }
                alt="placeholder"
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(Register);
