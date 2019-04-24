import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "../router";
import AppHeader from "./AppHeader";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <AppHeader />
                    <Router/>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
