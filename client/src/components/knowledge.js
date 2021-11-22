import React, {Component} from "react";
import "../public/styles/style.css";
import Slice from './Slices/Slices';
import Questions from './Questions/Questions';

export default class Pie extends Component{
    state = {
        slices: {
            1: {
                question: 'Python',
                rotate: 'rotate(0.0000, 220, 220)',
                fill: '#F5F3BD',
                transform: '0.8'
            },
            2: {
                question: 'Java',
                rotate: 'rotate(36.0000, 220, 220)',
                fill: '#F5C691',
                transform: '0.9'
            },
            3: {
                question: 'JavaScript',
                rotate: 'rotate(72.0000, 220, 220)',
                fill: '#F0A754',
                transform: '0.9'
            },
            4: {
                question: 'C',
                rotate: 'rotate(108.0000, 220, 220)',
                fill: '#B2B2B2',
                transform: '0.7'
            },
            5: {
                question: 'Scala',
                rotate: 'rotate(144.0000, 220, 220)',
                fill: '#E7E7E7',
                transform: '0.4'
            },
            6: {
                question: 'Machine Learning/Neural Networks',
                rotate: 'rotate(180.0000, 220, 220)',
                fill: '#81CFE7',
                transform: '0.8'
            },
            7: {
                question: 'Node.js',
                rotate: 'rotate(216.0000, 220, 220)',
                fill: '#A3E781',
                transform: '0.9'
            },
            8: {
                question: 'MongoDB',
                rotate: 'rotate(252.0000, 220, 220)',
                fill: '#BFE781',
                transform: '0.9'
            },
            9: {
                question: 'React',
                rotate: 'rotate(288.0000, 220, 220)',
                fill: '#7CF2EA',
                transform: '0.7'
            },
            10: {
                question: 'Express',
                rotate: 'rotate(324.0000, 220, 220)',
                fill: '#F2877C',
                transform: '0.9'
            },
        }
    }

    render(){
    return(
        <div className="Content">
        <div className="QuestionsBlock">
                <ul>
                    <Questions
                        slices={this.state.slices}
                    />
                </ul>
            </div>
        <div className="ChartBlock">
            <div className="ChartPie" style={{width: '450px'}}>
                <svg className="ChartPieChunk" width="440px" height="440px" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <g id="overlay">
                        <rect x="219" y="20" height="200" width="2" fill="#FFF"></rect>
                        <g transform="translate(210, 10)">
                            <path fill="#000"></path>
                        </g>
                    </g>
                </defs>
                <mask id="wedge-mask" fill="white">
                    <path transform="translate(20, 20)" d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 145.33 20.241z" fillRule="nonzero"></path>
                </mask>
                <circle cx="220" cy="220" r="200" fill="#EFEFEF" stroke="#E3E3E3" strokeWidth="1"></circle>
                    <Slice
                        slices={this.state.slices}
                    />
                    <use xlinkHref="#overlay" transform="rotate(19, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(55, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(91.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(127.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(163.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(199.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(235.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(271.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(307.0000, 220, 220)"></use>
                    <use xlinkHref="#overlay" transform="rotate(343.0000, 220, 220)"></use>
                </svg>
            </div>
        </div>
    </div>
    )
}
}