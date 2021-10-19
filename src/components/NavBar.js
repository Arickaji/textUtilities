import React from 'react'
import { Link } from 'react-router-dom';
function NavBar(props) {
    let SwtichStyle = {
        marginLeft: "auto",
        marginRight: 0
    }
    return (
        <div className="nav">
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.Mode}`} style={{ width: "100%" }}>
                <div className="container">
                    <Link className={`navbar-brand text-${props.toggleLabel}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={`nav-link active text-${props.toggleLabel}`} aria-current="page" to="/">Home</Link>
                            <a className={`nav-link text-${props.toggleLabel}`} href="/">Features</a>
                            <Link className={`nav-link text-${props.toggleLabel}`} to="/about">About</Link>
                        </div>
                        <div style={SwtichStyle}>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.cobalt} disabled={props.SecondBtnDis} />
                                <label className={`form-check-label text-${props.toggleLabel}`} htmlFor="flexSwitchCheckDefault">Cobalt Mode</label>
                            </div>
                        </div>
                        <div style={SwtichStyle}>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle} disabled={props.DisableBtn}/>
                                <label className={`form-check-label text-${props.toggleLabel}`} htmlFor="flexSwitchCheckDefault">Black Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar
