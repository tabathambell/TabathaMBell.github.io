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
                <p className="portfolio-description"><br />Description Description Description Description Description Description
                Description Description Description Description Description Description Description
                Description Description Description Description Description Description Description <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick{...() => window.open("https://github.com/nickmay9/MovieApp-TeamProject1")}>https://github.com/nickmay9/MovieApp-TeamProject1</a>
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
                <p className="portfolio-description"><br />Description Description Description Description Description Description
                Description Description Description Description Description Description Description
                Description Description Description Description Description Description Description <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick{...() => window.open("https://github.com/tabathambell/fullstack-project2")}>https://github.com/tabathambell/fullstack-project2</a><br />
                    <b>Demo:</b> <a className="hyper-link" onClick{...() => window.open("https://creepventures-project2.herokuapp.com/")}>https://creepventures-project2.herokuapp.com/</a>
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
        <div className="portfolio-wrapper">
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
