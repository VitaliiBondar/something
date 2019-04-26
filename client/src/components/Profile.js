import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AppHeader from "../components/AppHeader";

const styles = {
    root: {
        flexGrow: 1,
        maxWidth: "50%",
    },
    table: {

    },
    cardStyle: {
        width: "60%",
        margin: 16,
    }
};
class ProfileInfo extends React.Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        login:'',
        role:'user',
        errors:{}
    };
    componentDidMount(){
        let user ={
            login:localStorage.getItem('login')
        };
        const requestConfig = {
            headers: new Headers({ "Content-Type": "application/json"}),
            method: "POST",
            body: JSON.stringify(user)
        };
        fetch("/api/users/getInfo", requestConfig)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.success){
                    this.setState({
                        firstName:response.login.firstName,
                        lastName:response.login.lastName,
                        login:response.login.login,
                        email:response.login.email

                    })
                }
            })
            .catch(error => {
                this.setState({
                    errors:{msg:error}
                })
            });
    }
    render(){
        const {classes} = this.props;
        return(<>
                <AppHeader />
                <div className="container" align="center">
                    <Card className={classes.cardStyle}>
                        <Table className={classes.table}>
                            <TableBody>
                                <TableRow key={1}>
                                    <TableCell component="th" scope="row">
                                        Name:
                                    </TableCell>
                                    <TableCell align="right">{this.state.firstName}</TableCell>
                                </TableRow>
                                <TableRow key={2}>
                                    <TableCell component="th" scope="row">
                                        Last Name:
                                    </TableCell>
                                    <TableCell align="right">{this.state.lastName}</TableCell>
                                </TableRow>
                                <TableRow key={3}>
                                    <TableCell component="th" scope="row">
                                        Email:
                                    </TableCell>
                                    <TableCell align="right">{this.state.email}</TableCell>
                                </TableRow>
                                <TableRow key={4}>
                                    <TableCell component="th" scope="row">
                                        Login:
                                    </TableCell>
                                    <TableCell align="right">{this.state.login}</TableCell>
                                </TableRow>
                                <TableRow key={5}>
                                    <TableCell component="th" scope="row">
                                        Role:
                                    </TableCell>
                                    <TableCell align="right">{this.state.role}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>

                </div>
            </>
        )
    }

}
export default withStyles(styles)(ProfileInfo);