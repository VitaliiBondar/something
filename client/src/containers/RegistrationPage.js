import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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

function RegistrationPage(props) {
    const { classes } = props;

    return (
        <Grid container justify="center">
            <Paper className={classes.root} elevation={1}>
                <Grid container justify="space-around" alignItems="center">
                    <TextField
                        id="filled-name"
                        label="Name"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-name"
                        label="Lastname"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-name"
                        label="Login"
                        className={classes.textField}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Email"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Confirm your password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Registration
                    </Button>
                </Grid>

            </Paper>
        </Grid>
    );
}

RegistrationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationPage);