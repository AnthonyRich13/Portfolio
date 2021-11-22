import React from "react";
import { useEffect, useState, useRef } from "react";

import "../public/styles/style.css";
import travel1 from "../public/images/travel1.jpg";
import travel2 from "../public/images/travel2.jpg";
import travel3 from "../public/images/travel3.jpg";
import tech1 from "../public/images/tech1.jpg";
import tech2 from "../public/images/tech2.jpg";
import tech3 from "../public/images/tech3.jpg";
import space1 from "../public/images/space1.jpg";
import space2 from "../public/images/space.jpg";
import space3 from "../public/images/projectsback.jpg";
import cinema1 from "../public/images/cinema1.jpg";
import cinema2 from "../public/images/cinema2.jpg";
import cinema3 from "../public/images/cinema3.jpg";

const travel = [travel1, travel2, travel3];
const tech = [tech1, tech2, tech3];
const space = [space1, space2, space3];
const cinema = [cinema1, cinema2, cinema3];

function Interests(){
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            if(currentIndex === travel.length - 1) {
                setCurrentIndex(0);
            } else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex])
    return (
        <nav>
            <div className="container-4">
                <div className="left-2">
                    <div className="top-3">
                        <h1 className="text">TRAVEL</h1>
                        <img useEffect={useEffect} className="img" src={travel[currentIndex]} />
                    </div>
                    <div className="bottom-3">
                        <h1 className="text">TECH</h1>
                        <img className="img" src={tech[currentIndex]} />
                    </div>
                </div>
                <div className="right-2">
                    <div className="top-4">
                        <h1 className="text">SPACE</h1>
                        <img className="img" src={space[currentIndex]} />
                    </div>
                    <div className="bottom-4">
                        <h1 className="text">CINEMA</h1>
                        <img className="img" src={cinema[currentIndex]} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Interests;