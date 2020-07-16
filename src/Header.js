import React from "react";
import "./styles.css";

const  Header= () => {

    return (<header class="header">    
        <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">Pre Vel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="#footer">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#pricing">Estimate</a>
            </li>
        </ul>
        </div>
        </nav>
    </header>);
}

export default Header;