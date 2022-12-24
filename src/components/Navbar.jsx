import React from 'react'


class Navbar extends React.Component {
    render(){
        return(
            <div id="body">
            <header class="Allhead transparent" id="Header">
            <div class="header-logo">
                <a class="logo" title="Jason Aul" alt="Aul">
                    <img id="logo-image" src='https://i.imgur.com/KZu91PC.png'></img>
                </a>
            </div>
            <div class="header-nav-full">
            <div class="header-left">
                <nav class="header-main" id="main-nav">
                    <ul class="header-main-list">
                        <li class="nav-text-color">
                            <a href="/">Home</a>
                        </li>
                        <li class="nav-text-color">
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/games">Portfolio</a>
                        </li>
                        <li>
                            <a href="/games">Resume</a>
                        </li>
                    </ul>
                </nav>
            <div class="header-right">
                <nav class="header-sub" id="sub-nav">

                </nav>
            </div>
            </div>
            </div>
            </header>
            </div>
        )
    }
}


export default Navbar


