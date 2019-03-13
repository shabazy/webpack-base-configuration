import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from './components/Body';
import Header from "./components/Header";
import Footer from './components/Footer';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Route component={Header} path="/"/>
                    <Route component={Body} path="/"/>
                    <Route component={Footer} path="/"/>
                </div>
            </Router>
        );
    }
}

export default App;