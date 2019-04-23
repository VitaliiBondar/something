import React from "react";
import { Route, Switch } from "react-router-dom";
import Board from "../components/Board";
import RegistrationPage from "../containers/RegistrationPage";
import LoginPage from "../containers/LoginPage";


class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Board} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
                <Route render={() => (<div style={{color: "white", textAlign: "center", fontSize: "2rem"}}>Page not found </div>)} />
            </Switch>
        );
    }
}
export default Router;