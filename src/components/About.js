import React from 'react'
import image from "../headshot.jpg";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <h1 className="about-heading">About Me</h1>
                        <img className="profile-img" src={image} alt="image of tabatha" />

                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <p className="details">
                        Hello! My name is Tabatha Bell and I am a Florida-based full-stack web developer.
                        I have an Associate's Degree in English from Ozarks Technical Community College,
                        a Bachelor's Degree in Business Administration from Missouri State University,
                        and a Certification in Web Development through University of Central Florida.
                        I have been programming and coding front-end content for several years and honed my skills
                        in back-end development through the UCF Coding Bootcamp.

                        My diverse set of skills include HTML5 + CSS + Javascript, all of the way up to CSS frameworks
                        such as Bootstrap and UIKit, Responsive Design, JQuery, Node.js, REST, Express.js, MongoDB,
                        Rational Expressions, React.js and MySQL.<br /><br />

                        To contact me, please e-mail: <a href="mailto:tabathambell@live.com">tabathambell@live.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
