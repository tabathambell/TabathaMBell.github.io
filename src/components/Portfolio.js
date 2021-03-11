import React from 'react'
import Movie from '../images/movieapp.PNG';
import Creepventures from '../images/creepventures.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // MovieApp
    const openPopupboxMovie = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Movie} alt="Movie App School Project" />
                <p className="portfolio-description"><br />
                MovieApp is a website designed to use API's in order to search information on films and
                save them to local storage, then display on a user's watch list. I worked primarily on
                the HTML, CSS and overall design layout of the application and a little bit of the API's.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nickmay9/MovieApp-TeamProject1")}>https://github.com/nickmay9/MovieApp-TeamProject1</a>
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigMovie = {
        titleBar: {
            enable: true,
            text: "MovieApp Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Creepventures
    const openPopupboxCreep = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Creepventures} alt="Full Stack School Project" />
                <p className="portfolio-description"><br />
                Creepventures is a full stack website for an interactive user experience in discussing haunted
                places in the world, posting pictures, comments, and a like/dislike system implementation. I worked
                primarily on REST, Handlebars, CSS and rendering.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tabathambell/fullstack-project2")}>https://github.com/tabathambell/fullstack-project2</a><br />
                    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://creepventures-project2.herokuapp.com/")}>https://creepventures-project2.herokuapp.com/</a>
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCreep = {
        titleBar: {
            enable: true,
            text: "Creepventures: Tell Us Your Scary Stories"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-3">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxMovie}>
                        <img className="portfolio-image" src={Movie} alt="Movie App Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="image-box-wrapper row justify-content-center">
                        <div className="portfolio-image-box" onClick={openPopupboxCreep}>
                            <img className="portfolio-image" src={Creepventures} alt="Creepventures" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigMovie} />
            <PopupboxContainer {...popupboxConfigCreep} />
        </div>
    )
}

export default Portfolio
