import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import AppHeader from "../components/AppHeader";

const styles = theme => ({
    root: {
        marginTop: 20,
        // display: "flex",
        width: 750,
        // marginLeft: "20%"
    },
    textField: {
        width: 700,
        height: 50
    },
    btn: {
        height: 40,
        margin: 16
    }
});

class RegistrationPage extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
        passwordConfirm: '',
        errors: {}
    };
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            login: this.state.login,
            password: this.state.password
        };
        console.log(user);
        this.props.history.push('/login');
        const requestConfig = {
            headers: new Headers({ "Content-Type": "application/json"}),
            method: "POST",
            body: JSON.stringify(user)
        };
        fetch("/api/users/registr", requestConfig)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => {
                this.setState({
                    errors:{msg:error}
                })
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <AppHeader />
            <Grid container justify="center">
                <Paper className={classes.root} elevation={1}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container justify="space-around" alignItems="center">
                            <TextField
                                name="firstName"
                                label="Name"
                                className={classes.textField}
                                onChange={this.handleInputChange}
                                value={this.state.firstName}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                name="lastName"
                                label="Lastname"
                                className={classes.textField}
                                onChange={this.handleInputChange}
                                value={this.state.lastName}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                name="login"
                                label="Login"
                                className={classes.textField}
                                onChange={this.handleInputChange}
                                value={this.state.login}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                name="email"
                                label="Email"
                                className={classes.textField}
                                onChange={this.handleInputChange}
                                value={this.state.email}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                name="password"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                name="passwordConfirm"
                                label="Confirm your password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleInputChange}
                                value={this.state.passwordConfirm}
                                margin="normal"
                                variant="filled"
                            />
                            {this.state.email && this.state.firstName && this.state.lastName &&
                            this.state.password && this.state.passwordConfirm && this.state.login ?
                                <Button type="submit" variant="contained" color="primary" className={classes.btn}>
                                    Registration
                                </Button> : <Button type="submit" disabled variant="contained" color="primary"
                                                    className={classes.btn}>
                                    Registration
                                </Button>}

                        </Grid>
                    </form>

                </Paper>
            </Grid>
                </>
        );
    }


}

RegistrationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationPage);