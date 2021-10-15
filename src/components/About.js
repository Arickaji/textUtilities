import React from 'react'

function About(props) {
    return (
        <div className="container">
            <h4 className={`mx-5 my-3 text-${props.toggleLabel}`}>About Sections</h4>
            <p className={`mx-5 my-3 text-${props.toggleLabel}`}>TextUtilities Makes in ReactJS .  Without reloading the page you can easily go to second page.</p>
        </div>
    )
}

export default About