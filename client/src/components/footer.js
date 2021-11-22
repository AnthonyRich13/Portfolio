import React from 'react'
import {Link} from 'react-router-dom'

import { ReactComponent as HomeIcon} from '../icons/home.svg';
import { ReactComponent as CopyIcon} from '../icons/copyright.svg';
import { ReactComponent as TimelineIcon} from '../icons/timeline.svg';
import { ReactComponent as ProjectsIcon} from '../icons/projects.svg';
import { ReactComponent as KnowledgeIcon} from '../icons/knowledge.svg';
import { ReactComponent as InterestsIcon} from '../icons/interests.svg';
import { ReactComponent as GithubIcon} from '../icons/github.svg';
import { ReactComponent as LinkedinIcon} from '../icons/linkedin.svg';
import { ReactComponent as TwitterIcon} from '../icons/twitter.svg';
import { ReactComponent as GmailIcon} from '../icons/gmail.svg';

function Footer(){
    return(
        <footer className="footer">
            <div className="top-6">
                    <div className="top-5">
                        <div className="top-7">
                            <Link to="/" className="menu-item-2" >
                                <span className="icon-button-3">{<HomeIcon/>}</span>
                                <p className="footer-text"> Home </p>
                            </Link>
                            <Link to="/timeline" className="menu-item-2" >
                                <span className="icon-button-3">{<TimelineIcon/>}</span>
                                <p className="footer-text"> Timeline </p>
                            </Link>
                            <Link to="/projects" className="menu-item-2" >
                                <span className="icon-button-3">{<ProjectsIcon/>}</span>
                                <p className="footer-text"> Projects </p>
                            </Link>
                        </div>
                        <div className="bottom-7">
                            <Link to="/competences" className="menu-item-2" >
                                <span className="icon-button-3">{<KnowledgeIcon/>}</span>
                                <p className="footer-text"> Competences </p>
                            </Link>
                            <Link to="/interests" className="menu-item-2" >
                                <span className="icon-button-3">{<InterestsIcon/>}</span>
                                <p className="footer-text"> Interests </p>
                            </Link>
                        </div>

                </div>
                <div className="bottom-5">
                        <div className="top-8">
                            <a href="https://github.com/AnthonyRich13" className="menu-item-2" >
                                <span className="icon-button-3">{<GithubIcon/>}</span>
                                <p className="footer-text"> AnthonyRich13 </p>
                            </a>
                            <a href="https://www.linkedin.com/in/jose-antonio-alonso-sanchez/" className="menu-item-2" >
                                <span className="icon-button-3">{<LinkedinIcon/>}</span>
                                <p className="footer-text"> Jose Antonio Alonso </p>
                            </a>
                        </div>
                        <div className="bottom-8">
                            <a href="https://twitter.com/anthony_rich_" className="menu-item-2" >
                                <span className="icon-button-3">{<TwitterIcon/>}</span>
                                <p className="footer-text"> @anthony_rich_ </p>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbGdDTtWlvRXcZlqVjjDCbdqWCMbSnwsBqStTlGsffJJVkSvJWhLsgsDXKCscqhkhchpn" className="menu-item-2" >
                                <span className="icon-button-3">{<GmailIcon/>}</span>
                                <p className="footer-text"> theanthonyrich@gmail.com </p>
                            </a>
                        </div>
                </div>
            </div>
            <div className="bottom-6">
            <div className="menu-item-2">
                        <span className="icon">{<CopyIcon/>}</span>
                        <p className="footer-text">Copyright - 2021</p>
                    </div>
            </div>
        </footer>
    )
}
export default Footer;