import React from 'react';
import MyResume from "../tabatharesume.pdf";

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <div className="text-center">
                <h1 className="resume-header">Resume</h1>
            </div>
        <div className="resume-display">
            <embed src={MyResume} width="1000" height="1125" type="application/pdf"></embed>
        </div>
        </div>
    )
}

export default Resume
