import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import TextField from "@material-ui/core/TextField";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class OpenCard extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {id,text,date}=this.props;
        return (

            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    details
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Card id: {id}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Date of creation: {date}
                        </DialogContentText>
                        {/*<TextField*/}
                            {/*id="outlined-bare"*/}
                            {/*defaultValue="Bare"*/}
                            {/*margin="normal"*/}
                            {/*variant="outlined"*/}
                        {/*/>*/}
                    </DialogContent>
                    {/*<DialogActions>*/}
                        {/*<Button onClick={this.handleClose} color="primary">*/}
                            {/*Disagree*/}
                        {/*</Button>*/}
                        {/*<Button onClick={this.handleClose} color="primary" autoFocus>*/}
                            {/*Agree*/}
                        {/*</Button>*/}
                    {/*</DialogActions>*/}
                </Dialog>
            </div>
        );
    }
}

export default OpenCard;