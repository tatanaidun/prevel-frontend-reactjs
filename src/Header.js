import React from "react";
import "./styles.css";

const  Header= () => {

    return (<header className="header">    
        <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#home">Pre Vel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#predict">Estimate</a>
            </li>
        </ul>
        </div>
        </nav>
    </header>);
}

export default Header;