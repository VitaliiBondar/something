import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import AppHeader from "../components/AppHeader";

const styles = theme => ({
    root: {
        marginTop: 20,
        // display: "flex",
        width:750,
        // marginLeft: "20%"
    },
    textField:{
        width:700,
        height:50
    },
    btn:{
        height:40,
        margin:16
    }
});

class LoginPage extends React.Component{
    state = {
        login: '',
        password: '',
        msg:'Enter your login and password',
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
            login: this.state.login,
            password: this.state.password
        };
        console.log(user);
        // this.props.history.push('/');
        const requestConfig = {
            headers: new Headers({ "Content-Type": "application/json"}),
            method: "POST",
            body: JSON.stringify(user)
        };
        fetch("/api/users/login", requestConfig)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                 if (response.success){
                 localStorage.setItem('auth','true');
                 localStorage.setItem('login',user.login);
                 this.props.history.push('/');
                 }
                this.setState({
                   msg:'Wrong login or password'
                })
            })
            .catch(error => {
                this.setState({
                    errors:{msg:error}
                })
            });
    };
    render(){
        const {classes} = this.props;
        return (<>
                <AppHeader />
            <form onSubmit={this.handleSubmit}>
                <Grid container justify="center">
                    <Paper className={classes.root} elevation={1}>
                        <Grid container justify="space-around" alignItems="center">
                            {this.state.msg}
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
                                name="password"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                autoComplete="current-password"
                                margin="normal"
                                variant="filled"
                            />

                            {this.state.login && this.state.password ? <Button type="submit" variant="contained" color="primary" className={classes.btn}>
                                Login
                            </Button>:<Button disabled type="submit" variant="contained" color="primary" className={classes.btn}>
                                Login
                            </Button>}
                        </Grid>

                    </Paper>
                </Grid>
            </form>
            </>
        );
    }


}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);