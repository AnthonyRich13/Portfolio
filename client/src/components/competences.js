import React from "react";

import { ReactComponent as AdaptIcon} from '../icons/adapt.svg';
import { ReactComponent as CreativeIcon} from '../icons/creative.svg';
import { ReactComponent as DetailIcon} from '../icons/detail.svg';
import { ReactComponent as TeamIcon} from '../icons/team.svg';
import { ReactComponent as ResponsibleIcon} from '../icons/responsible.svg';
import { ReactComponent as ProblemIcon} from '../icons/problem.svg';

import "../public/styles/style.css";

function Competences(){
    return (
        <nav>
            <div className="container-5">
                <div className="left-3">
                    <Competence leftIcon={<AdaptIcon/>} competence="Adaptability"/>
                    <Competence leftIcon={<CreativeIcon/>} competence="Creativity"/>
                    <Competence leftIcon={<DetailIcon/>} competence="Attention to Details"/>
                </div>
                <div className="right-3">
                    <Competence leftIcon={<TeamIcon/>} competence="Teamwork"/>
                    <Competence leftIcon={<ResponsibleIcon/>} competence="Responsible"/>
                    <Competence leftIcon={<ProblemIcon/>} competence="Problem Solvinf"/>
                </div>
            </div>
        </nav>
    )
}

function Competence(props){
    return(
        <nav>
            <span className="icon-button-2">{props.leftIcon}</span>
            <span className="competences">{props.competence}</span>
        </nav>
    )
}
export default Competences;