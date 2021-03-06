import React from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";

export default function App() {
  return (<>
    <section id="home" className="App">
       <Header/>
       <div className="row mainpage">

            <div className="col-md-6">
                    <div className="pulse"></div>
            </div>
                
            <div className="col-md-6 description">
                <div>
                    <h1><span>PreTraVel</span> your Journey</h1>
                </div>
                <div>
                    <h2><span>Pre</span>valuate your expenses before your Journey. Predict your flight price here</h2>
                </div>
            </div>
         </div>
         <div className="scrollDown">
             <span></span>
             <span></span>
             <span></span>
         </div>


        

    </section>
    <section id="predict" className="estimate">
        <Form/>
    </section>
    </>
  );
}
