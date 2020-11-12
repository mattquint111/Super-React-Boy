import React, { useState, useEffect } from "react";
import '../App.css' 
import Menu from "./Menu";

function BaseLayout(props) {
    return (
        <div>
            <div className="mainCont">
                <div className="gameConsole">
                    <div className="headerCont">
                        <div className="colorBarsLeft"></div>
                        <p className="headerText">
                            DOT MATRIX WITH STEREO SOUND
                        </p>
                        <div className="colorBarsRight"></div>
                    </div>

                    <div className="outerScreen">
                        <div className="batteryCont">
                            <div className="power"></div>
                            <p className="powerText">BATTERY</p>
                        </div>

                        <div className="innerScreen">

                            {props.children}

                        </div>
                    </div>

                    <div className="controlsCont">
                        <div className="directionCont">
                            <h1 className="directionPad">+</h1>
                        </div>

                        <div className="buttonCont">
                            <button className="gameButton-X"></button>
                            <button className="gameButton-Y"></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default BaseLayout;
