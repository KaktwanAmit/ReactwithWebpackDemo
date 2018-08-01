import React, { Component } from 'react';
import classes from './TableComp.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Axios from 'axios';
class TableComp extends Component {
    state = {
        details: []
    }
    componentDidMount() {
        //API call with axios
        // Axios.get('http://localhost:3000/data').
        //     then(res => {
        //         console.log('response----', res);
        //         const details = res.data;
        //         this.setState({ details: details });
        //     })
        
        //API call with fetch
            fetch('http://localhost:3000/data')
            .then(res=>res.json())
            .then(data=>this.setState({details:data}))

        //API call with promise
        //coming soon
    }
    render() {
        // const index=1;
        return (
            <div className={classes.main}>
                Hi this is Table Component
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell >Gender</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.details.map((n, index) => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.id}
                                    </TableCell>
                                    <TableCell >{n.name} </TableCell>
                                    <TableCell >{n.age}</TableCell>
                                    <TableCell >{n.gender}</TableCell>
                                    <TableCell >{n.company}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </div>
        );
    }
}
export default TableComp;