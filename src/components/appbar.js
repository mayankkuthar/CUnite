import React from "react";

export default class Appbar extends React.Component {
    render(){
        return (
            <div id="appbar">
                <div id="appbar-img">
                <img id="appbar-logo" src="./CUUnion-logo.svg" />
            </div>
                <input id="appbar-search" type="search" placeholder="Search..."></input>
                <div id="appbar-space"></div>
                <img id="appbar-icon" src="./message-icon.svg" />
                <img id="appbar-icon" src="./notification-icon.svg" />
                <span class="dot"></span>
                <h3>Mohit Sharma</h3>
                <img className="DownArrow1" src="./DownArrow.svg"/>
            </div>
        );
    }
}