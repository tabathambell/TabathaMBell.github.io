import React from 'react'
import Movie from '../images/movieapp.PNG';
import Creepventures from '../images/creepventures.PNG';
import Horror from '../images/quiz.png';
import Schedule from '../images/scheduler.png';
import Notes from '../images/notetaker.png';
import Tech from '../images/blog.png';
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

    //Horror  Quiz
    const openPopupboxQuiz = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Horror} alt="Horror Quiz" />
                <p className="portfolio-description"><br />
                The Horror Movie Quiz was a fun project that includes the use of Web APIs, HTML, CSS, and Javascript. This projet also uses Moment.js.
                You are able to go through the quiz and get a time and a score at the end of it and compare it to peers using local storage.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tabathambell/codequiz")}>https://github.com/tabathambell/codequiz</a><br />
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigQuiz = {
        titleBar: {
            enable: true,
            text: "Horror Film Quiz"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Note Taker
    const openPopupboxNotes = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Notes} alt="Note Taker" />
                <p className="portfolio-description"><br />
                A note taking app that is able to save, delete, and write in real time. This includes Express.js, Javascript, Node.js, JSON files,
                HTML, and CSS.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tabathambell/note-taker")}>https://github.com/tabathambell/note-taker</a><br />
                    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tmb-note-taker.herokuapp.com/")}>https://tmb-note-taker.herokuapp.com/</a>
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNotes = {
        titleBar: {
            enable: true,
            text: "Note Taker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Workday Scheduler
    const openPopupboxScheduler = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Schedule} alt="Workday Scheduler" />
                <p className="portfolio-description"><br />
                The workday scheduler was an assignment that I did during my coding bootcamp that uses third party APIs in order to make a functional, easy to use workday scheduler.
                It's fully operational using javascript, CSS, and HTML. It is also using Moment.js and can track which day you're on using a color code system.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tabathambell/employee-tracker")}>https://github.com/tabathambell/employee-tracker</a><br />
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigScheduler = {
        titleBar: {
            enable: true,
            text: "Workday Scheduler"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Tech Blog
    const openPopupboxBlog = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Tech} alt="Full Stack School Project" />
                <p className="portfolio-description"><br />
                This is a blog project that I did in coding bootcamp where we were to create a basic blog using Handlebars.js, Node.js, Express.js, and basic Javascript.
                 <br /><br />
                    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/tabathambell/blog-project")}>https://github.com/tabathambell/blog-project</a><br />
                    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tmb-tech-blog.herokuapp.com/")}>https://tmb-tech-blog.herokuapp.com/</a>
                </p>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBlog = {
        titleBar: {
            enable: true,
            text: "Tech Blog"
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
                </div>

                <div className="image-box-wrapper row justify-content-center pr-3">
                    <div className="portfolio-image-box" onClick={openPopupboxCreep}>
                        <img className="portfolio-image" src={Creepventures} alt="Creepventures" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxQuiz}>
                        <img className="portfolio-image" src={Horror} alt="Horror Quiz" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

                <div className="image-box-wrapper row justify-content-center pr-3">
                    <div className="portfolio-image-box" onClick={openPopupboxBlog}>
                        <img className="portfolio-image" src={Tech} alt="Tech Blog" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

                <div className="image-box-wrapper row justify-content-center pr-3">
                    <div className="portfolio-image-box" onClick={openPopupboxScheduler}>
                        <img className="portfolio-image" src={Schedule} alt="Workday Scheduler" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNotes}>
                        <img className="portfolio-image" src={Notes} alt="Note Taker" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigMovie} />
            <PopupboxContainer {...popupboxConfigCreep} />
            <PopupboxContainer {...popupboxConfigQuiz} />
            <PopupboxContainer {...popupboxConfigBlog} />
            <PopupboxContainer {...popupboxConfigNotes} />
            <PopupboxContainer {...popupboxConfigScheduler} />
        </div>
    )
}

export default Portfolio
