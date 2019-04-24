import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Table from '@material-ui/core/Table';
import Grid from "@material-ui/core/Grid";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
function ProfileInfo(props) {
    const {classes} = props;
    return(
        <div className="container" align="center">
            <Card className={classes.cardStyle}>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                Name:
                            </TableCell>
                            <TableCell align="right">Vitalii</TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell component="th" scope="row">
                                Last Name:
                            </TableCell>
                            <TableCell align="right">Bondar</TableCell>
                        </TableRow>
                        <TableRow key={3}>
                            <TableCell component="th" scope="row">
                                Email:
                            </TableCell>
                            <TableCell align="right">some@gmail.com</TableCell>
                        </TableRow>
                        <TableRow key={4}>
                            <TableCell component="th" scope="row">
                                Login:
                            </TableCell>
                            <TableCell align="right">MinimuM</TableCell>
                        </TableRow>
                        <TableRow key={5}>
                            <TableCell component="th" scope="row">
                                Role:
                            </TableCell>
                            <TableCell align="right">user</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

        </div>
    )
}
export default withStyles(styles)(ProfileInfo);