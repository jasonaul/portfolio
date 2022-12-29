import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="header-nav">
            <Link to="/">
                <h1>Jason Aul</h1>
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </div>

    )
}


// class Navbar extends React.Component {
//     render(){
//         return(
//             <div id="body">
//             <header class="Allhead transparent" id="Header">
//             <div class="header-logo">
//                 <Link to="/"></Link>
//                 <a class="logo" title="Jason Aul" alt="Aul">
//                     <img id="logo-image" src='https://i.imgur.com/KZu91PC.png'></img>
//                 </a>
//             </div>
//             <div class="header-nav-full">
//             <div class="header-left">
//                 <nav class="header-main" id="main-nav">
//                     <ul class="header-main-list">
//                         <li class="nav-text-color">
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li class="nav-text-color">
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="projects">Portfolio & Projects</Link>
//                         </li>
//                         <li>
//                             <a href="/games">Resume</a>
//                         </li>
//                     </ul>
//                 </nav>
//             <div class="header-right">
//                 <nav class="header-sub" id="sub-nav">

//                 </nav>
//             </div>
//             </div>
//             </div>
//             </header>
//             </div>
//         )
//     }
// }


export default Navbar


