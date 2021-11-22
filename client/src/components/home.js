import React from "react";

import me from '../public/images/me.jpg';
import logo from '../public/images/Logo.png';

function Home(){
    return(
        <div className="home">
            <div className="top-9">
                <div className="left-4">
                    <img className="me" src={me}/>
                </div>
                <div className="right-4">
                    <p style={{margin: "10%", fontSize:"20px"}}>Graduated in Computer Engineering at the Polytechnic University of Madrid, enthusiastic about technology and space, eager to learn and develop interesting projects. Also ambitious and always looking to the future.
                        I am constantly developing projects that I find interesting and trying to be useful for the resolution of problems that arise in society.</p>
                </div>
            </div>
            <div className="bottom-9">
                <div className="left-5">
                    <p style={{margin: "10%", fontSize:"20px"}}>This logo represents my initials and my love of space, a rocket rising constantly, just like me.</p>
                </div>
                <div className="right-5">
                    <img className="logo-2" src={logo}/>
                </div>
            </div>
        </div>
    )
}
export default Home;