import React from "react";
import './Navbar2.css';

class Navbar extends React.Component {
    render(){
        return(
            <div id="menu">
                <div id="menu-items">
                    <a href="/" class="menu-item">Home</a>
                    <a href="/" class="menu-item">About Jason</a>
                    <a href="/" class="menu-item">Portfolio</a>
                    <a href="/" class="menu-item">Services</a>
                </div>
                <div id="menu-background-pattern"></div>
            </div>
        )
    }
}


export default Navbar