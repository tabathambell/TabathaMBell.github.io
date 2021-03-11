import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-6"></div>
                    <div className="col-lg-5 col-md-5 col-sm 6 align-items-center">
                        <div className="footer-description">
                            <h4>Share my portfolio on social media! 🖤</h4>
                        </div>
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://tabathambell.github.io/"}
                                quote={"Fullstack Developer"}
                                hashtag="#webdeveloper"
                                >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://tabathambell.github.io/"}
                                quote={"Fullstack Developer"}
                                hashtag="#webdeveloper"
                                >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://tabathambell.github.io/"}
                                quote={"Fullstack Developer"}
                                hashtag="#webdeveloper"
                                >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                            <EmailShareButton
                                url={"https://tabathambell.github.io/"}
                                >
                                <EmailIcon className="mx-3" size={36}/>
                            </EmailShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
