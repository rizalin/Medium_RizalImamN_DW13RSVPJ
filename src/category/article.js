import React, { Component } from 'react';
import { Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function Article(props) {
    return (
        <Media className="kontenSm">
            <Media.Body style={{ marginRight: '20px' }} >
                <h2>{props.title}</h2>
                <p>
                    {props.brief}
                </p>
                <h6 class="writerR">{props.writers}</h6>
                <h6>{props.time}. {props.read} min read</h6>
            </Media.Body>
            <img
                src='https://imgur.com/download/NCckh7t'
                alt="Generic placeholder"
            />
        </Media>
    )
}

export default Article;
