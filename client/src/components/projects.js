import React, { Component } from 'react';

import { ReactComponent as GithubIcon} from '../icons/github.svg';

import "../public/styles/style.css";

function Projects(props){
    return (
        <nav>
            <div className="container-3">
                <div className="top-1">
                    <div className="left-1">
                        <img className="logo-1" src={props.img}/>
                    </div>
                    <div className="right-1">
                        <div className="top-2">
                            <h1 className="title-project">{props.title}</h1>
                            <p className="text-project">{props.textTitle}</p>
                        </div>
                        <div className="bottom-2">
                            <span>{<GithubIcon/>}</span>
                            <a href={props.url} className="url-1"> Github | Repositorio público</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-1">
                    {props.text1}
                    <br/> <br/>
                    {props.text2}
                    <br/><br/>
                </div>

            </div>
        </nav>
    );
}

export default Projects;