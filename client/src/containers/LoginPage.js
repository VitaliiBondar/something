import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        marginTop: 20,
        marginLeft: 300,
        marginRight: 300,
        display: "flex",
    },
    textField:{
        marginLeft: "13%"
    }
});

function LoginPage(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
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
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="filled"
                />

            </Paper>
        </div>
    );
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);