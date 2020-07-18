import React from "react";
import "./styles.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
       <Header/>
       <div className="row mainpage">

            <div className="col-md-6">
                    <div className="pulse"></div>
            </div>
                
            <div className="col-md-6 description">
                <div>
                    <h1><span>Prevel</span> your Journey</h1>
                </div>
                <div>
                    <h2>A site to <span>Pre</span>valuate your expenses. Predict your flight price here</h2>
                </div>
            </div>
         </div>
         <div className="scrollDown">
             <span></span>
             <span></span>
             <span></span>
         </div>
         
    </div>
  );
}
