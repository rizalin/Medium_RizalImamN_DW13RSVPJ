import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Login from './login';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
    textAlign: "center",
    flexDirection: "row",
    display: "flex",

    padding: 'none'
  },
  isiContent: {
    width: '500px',
    marginTop: '5px',
    padding: '0px 50px',
  }
}));

const useStyles2 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      display: 'block',
      textAlign: 'center',

    },

  },
  root2: {
    margin: theme.spacing(1),
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",


  }
}));


export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes2 = useStyles2();

  return (

    <div>
      <Button type="button" onClick={handleOpen} variant="outline-success" size='sm'>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Typography>
            <div className={classes.paper}>
              <div>
                <img src={'https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png'} />
              </div>
              <div className={classes.isiContent}>
                <h1 id="transition-modal-title" style={{ margin: '10px' }}>Join Medium.</h1>
                <p id="transition-modal-description" style={{ fontSize: '14px', color: '#757575' }}>Create an account to receive great stories in your inbox,
              personalize your homepage, and follow authors and topics that your love.</p>

                <div className={classes2.root}>
                  <form className={classes2.root2} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Your Username" />
                    <TextField
                      id="standard-password-input"
                      label="Your password"
                      className={classes2.textField}
                      type="password"
                      autoComplete="current-password"
                    />
                    <TextField id="standard-basic" label="Your Email" />
                    <br></br>
                    <br></br>
                    <Button type='submit' variant="dark">Registration</Button>                   
                  </form>
                </div>
                <br></br>
                <p style={{ fontWeight: 'bold' }}>Already have an account? <Login /> </p>
                <p style={{ fontSize: '14px', color: '#757575' }}>To make Medium work, we log user data and share it with service provider. Click "Sign Up" above to accept
                  Medium's <u>Term of Service</u> and <u>Privacy Policy.</u>
                </p>
              </div>
              <div>
                <img src={"https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"} />
              </div>
            </div>
          </Typography>
        </Fade>
      </Modal>

    </div>

  );
}