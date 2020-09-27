import React from 'react';
import portrait from '../../assets/images/tbPortrait.png'

function About() {
    return (
        <div className="text-center m-4">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div>
                <div>
                    <img className="portrait" alt="Theodore Butts" src={portrait} />
                </div>
                <div className="about-body">
                    <p>Designer. Developer. Photographer. Creator.</p>
                    <p>Creating beautiful designs for you or your business</p>
                </div>
            </div>
        </div>
    )
}

export default About