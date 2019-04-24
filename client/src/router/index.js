import React from "react";
import { Route, Switch } from "react-router-dom";
import Board from "../components/Board";
import RegistrationPage from "../containers/RegistrationPage";
import LoginPage from "../containers/LoginPage";
import Profile from "../components/Profile";


class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Board} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/profile" component={Profile} />
            </Switch>
        );
    }
}
export default Router;