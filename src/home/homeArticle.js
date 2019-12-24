import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function HomeArticle(props) {
    return (
        <div>
            <Media className="big-card">
                <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>{props.title}</h4>
                    <p>
                    {props.brief}
                    </p>
                    <br></br>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <p><span className="black">{props.writers} in {props.category}</span> <br></br>
                            {props.time} . {props.read} min read</p>
                        <div>
                            <BookmarkBorderIcon style={{ fontSize: 25 }} />
                            <MoreHorizIcon style={{ fontSize: 25 }} />
                        </div>
                    </Grid>
                </Media.Body>
                <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                />
            </Media>
            <br></br>
            <br></br>
        </div>
    );
}

export default HomeArticle;