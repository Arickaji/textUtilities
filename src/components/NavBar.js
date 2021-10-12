import React from 'react'

function NavBar(props) {

    return (
        <div className="nav">
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.Mode}`} style={{ width: "100%" }}>
                <div className="container">
                    <a className={`navbar-brand text-${props.toggleLabel}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={`nav-link active text-${props.toggleLabel}`} aria-current="page" href="/">Home</a>
                            <a className={`nav-link text-${props.toggleLabel}`} href="/">Features</a>
                            <a className={`nav-link text-${props.toggleLabel}`} href="/">Pricing</a>
                        </div>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input mx-1" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle} />
                        <label className={`form-check-label text-${props.toggleLabel}`} htmlFor="flexSwitchCheckDefault">Black Mode</label>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar
