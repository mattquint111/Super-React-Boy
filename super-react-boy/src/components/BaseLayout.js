import React from "react";
import '../App.css' 


function BaseLayout(props) {
    return (
        <div>
            <div className="mainCont">
                <div className="gameConsole">
                    <div className="outerScreen">
                        <div className='outerScreen-top'>
                            <div className='headerCont'>
                                <div className="colorBarsLeft"></div>
                                <div className='headerText'>
                                    <p>DOT MATRIX WITH STEREO SOUND</p>
                                </div>
                                <div className="colorBarsRight"></div>
                            </div>
                        </div>
                        <div className='outerScreen-bottom'>
                            <div className="batteryCont">
                                <div className="power"></div>
                                <p className="powerText">BATTERY</p>
                            </div>
                            <div className="innerScreen">
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <div className="controlsCont">
                    <div className="controlsTop">
                        <div className="direction">
                            <i className="fas fa-plus"></i>
                        </div>

                        <div className="startSelectCont"></div>

                        <div className="buttonCont">
                            <button className="gameButton-X"></button>
                            <button className="gameButton-Y"></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BaseLayout;
