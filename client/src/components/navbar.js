import React, {Fragment, useState} from 'react';
import {Link}  from 'react-router-dom'

import TimelinePage from "./timelinePage"
import ProjectsPage from "./projectsPage"

import { ReactComponent as MenuIcon} from '../icons/menu.svg';
import { ReactComponent as HomeIcon} from '../icons/home.svg';
import { ReactComponent as ProjectsIcon} from '../icons/projects.svg';
import { ReactComponent as SkillsIcon} from '../icons/timeline.svg';
import { ReactComponent as KnowledgeIcon} from '../icons/knowledge.svg';
import { ReactComponent as InterestsIcon} from '../icons/interests.svg';

import "../public/styles/style.css";

import logo from '../public/images/Logo.png';
import {CSSTransition} from 'react-transition-group';

function Navbar() {
    return (
      <Navbarf>
        <NavItem icon={<MenuIcon/>} >
          <DropdownMenu />
        </NavItem>
        <h1 className="Name">Anthony Rich</h1>
        <img className="logo" src={logo} />
      </Navbarf>

    );
}

function Navbarf(props){
  return (
    <nav className='navbar'>
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function DropdownMenu(){

  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props){
    return(

    <Link to={props.url} className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
    </Link>
    );
  }

  return(
    <div className="dropdown">
      <CSSTransition in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary">
        <div className="menu">
        <DropdownItem leftIcon={<HomeIcon/>} url="/">
            <p style={{marginLeft: "10px"}}>Home</p>
        </DropdownItem>
        <DropdownItem leftIcon={<SkillsIcon/>} url="/timeline">
            <p style={{marginLeft: "10px"}}>Timeline</p>
        </DropdownItem>
        <DropdownItem leftIcon={<ProjectsIcon/>} url="/projects">
          <p style={{marginLeft: "10px"}}>Projects</p>
        </DropdownItem>
        <DropdownItem leftIcon={<InterestsIcon/>} url="/interests">
          <p style={{marginLeft: "10px"}}>Interests</p>
        </DropdownItem>
        <DropdownItem leftIcon={<KnowledgeIcon/>} url="/competences">
          <p style={{marginLeft: "10px"}}>Competences</p>
        </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function NavItem(props){

  const[open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}


export default Navbar;