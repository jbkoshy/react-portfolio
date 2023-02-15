import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Run App
function app() {

    return(
        <div className="App">
            <Header/>
            <Footer/>
        </div>
    );
}

export default app;
