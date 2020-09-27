import React from 'react'

function Resume() {
    return (
        <section>
            <h1 className="resume-title">Resume</h1>
            <div className="resume-content">
                <br></br>
                <div>
                    <h3>Front-End Proficiencies</h3>
                    <p>HTML, CSS, JavaScript, jQuery, React.js, IndexedDB</p>
                </div>
                <br></br>
                <div>
                    <h3>Back-End Proficiencies</h3>
                    <p>Node.js, Express.js, SQL, Sequelize, NoSQL, API's (third-party, RESTful, server-side)</p>
                </div>
            </div>
        </section>
    )
}

export default Resume