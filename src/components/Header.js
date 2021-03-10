import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Full Stack Web Developer</h1>
            <Typed
            className="typed-text"
            strings={[ "HTML, CSS & Javascript", "Node", "APIs", "Express", "Responsive Design", "React", "REST", "MongoDB", "MySQL", "Handlebars", "Insomnia Core", "MVC Paradigm", "Rational Expressions" ]}
            typeSpeed={50}
            backSpeed={80}
            loop
            />
            <a href="#" className="btn-main-offer">contact me</a>
        </div>
    </div>
    )
}

export default Header;
