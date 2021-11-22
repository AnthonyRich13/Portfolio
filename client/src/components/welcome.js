import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../public/styles/style.css";

function Welcome(props) {
    return (
      <nav className='welcome'>
        <div className="container-2">
            <h1 className="title-1" style={props.size}>{props.title}</h1>
        </div>
      </nav>
    );
}

export default Welcome;