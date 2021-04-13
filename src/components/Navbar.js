import React from "react";
import logo from "../portfoliocatheader.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" className="nav-link" href="#">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="resume" className="nav-link" href="#">resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" className="nav-link" href="#">contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/tabathambell" className="nav-link">github</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/tabatha-bell/" className="nav-link">linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
