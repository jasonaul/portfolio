import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header-nav">
            <Link to="/">
                <h1 className='nav-name'>Jason Aul</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-linky'>
                    <Link to="/" onClick={handleClick}>Home</Link>
                </li>
                <li className='nav-linky'>
                    <Link to="/projects" onClick={handleClick}>Projects</Link>
                </li>
                <li className='nav-linky'>
                    <Link to="/skills" onClick={handleClick}>Skills</Link>
                </li>
                <li className='nav-linky'>
                    <Link to="/about" onClick={handleClick}>About & Resume</Link>
                </li>
                <li className='nav-linky'>
                    <Link to="/contact" onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} />)
                :(
                    <FaBars size={25} />
                )
                }
                
                
            </div>
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


