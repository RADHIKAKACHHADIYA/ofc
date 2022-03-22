import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

class TableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    handleDelete = (id) => {
        // let filterData = this.props.items.filter((l) => l.id !== id)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const filterData = this.props.items.filter((item) => item.id !== id);
                this.props.callback(filterData)
                this.setState({ filterData });
            })
    }

    handleEdit = (id) => {
        let filterEditData = this.props.items.filter((l) => l.id === id)
        this.props.callbackEdit(filterEditData[0])
        
        // axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
        //     .then((response) => {
        //         setPost(response.data);
        //     });
    }


    render() {
        return (
            <div>
                <TableContainer component={Paper} className="container mt-5">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>status</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.items.length > 0 ?
                                    this.props.items.map((l, i) => (
                                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{l.name}</TableCell>
                                            <TableCell>{l.email}</TableCell>
                                            <TableCell>{l.gender}</TableCell>
                                            <TableCell>{l.status}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => this.handleEdit(l.id)} className='me-3'>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => this.handleDelete(l.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : null
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TableData;