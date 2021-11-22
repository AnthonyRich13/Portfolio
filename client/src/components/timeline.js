import React, { Component } from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "../public/styles/style.css";

function Timeline() {
  return (
      <nav className='timeline'>
        <Top text= "ACTUALIDAD"/>
        <VerticalTimeline>
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #484a4d' }}
        date="2021 - Oct"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Fin Universidad</h3>
        <h4 className="vertical-timeline-element-subtitle">Universidad Politécnica de Madrid, Madrid, ES</h4>
        <p>
        Graduado en Ingeniería de Computadores con un 10 en el Trabajo Fin de Grado, realizando un red neuronal para detección de emociones y su posterior aplicación mediante visión artificial y desarrollo móvil.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #242526' }}
        date="Mar 2021 - Ago 2021"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
      
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Madrid, ES</h4>
        <p>
        Desarrollo de una plataforma web en relación con el proyecto DEMETER, junto al equipo de investigación de Ingeniería de Redes y Servicios Avanzados de Telecomunicación perteneciente al departamento de Sistemas Informáticos en la universidad Politécnica de Madrid.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #484a4d' }}
        date="2017 - Sep"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
      
        <h3 className="vertical-timeline-element-title">Inicio Universidad</h3>
        <h4 className="vertical-timeline-element-subtitle">Universidad Politécnica de Madrid, Madrid, ES</h4>
        <p>
          Fin de Bachillerato e inicio del grado en Ingeniería de Computadores por la Universidad Politécnica de Madrid.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #242526' }}
        date="Sep 2016 - Jul 2017"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
      
        <h3 className="vertical-timeline-element-title">Estudios Teatro</h3>
        <h4 className="vertical-timeline-element-subtitle">Estudio Yael Belicha, Madrid, ES</h4>
        <p>
        A la vez que se cursaba el bachillerato, se realizaron clases de interpretación que pudieran darme nuevas habilidades comunicativas.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #484a4d' }}
        date="Mar 2017"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
      
        <h3 className="vertical-timeline-element-title">Actor y modelo</h3>
        <h4 className="vertical-timeline-element-subtitle">Kailash, Madrid, ES</h4>
        <p>
        Trabajo como modelo publicitario para Orange.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '-webkit-linear-gradient(45deg, #242526, #484a4d)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #242526' }}
        date="Ene 2016"
        iconStyle={{ background: '#484a4d', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Actor y modelo</h3>
        <h4 className="vertical-timeline-element-subtitle">Kailash, Madrid, ES</h4>
        <p>
        Trabajo como modelo publicitario para IKEA.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: '#484a4d', color: '#fff' }}
      />
    </VerticalTimeline>
    <Top text= "DEMASIADO PASADO"/>
      </nav>
    );
}

function Top(props) {
  return (
      <nav className="top">
        <div className="container-1">
          <br/>
          <h1 style={{fontSize:'40px'}}>{props.text}</h1>
          <br/>
        </div>
      </nav>
    );
  
}

export default Timeline;