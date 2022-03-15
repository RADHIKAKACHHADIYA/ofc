import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import Table from './Table';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            items: [],
            isEdit: true

        }
    }

    handleDataSubmit = (e) => {
        e.preventDefault();

        let objectData = {
            id: Math.floor((Math.random() * 100) + 1),
            name: this.state.name,
            password: this.state.password
        };

        this.state.items.push(objectData)

        this.setState({
            name: "",
            password: "",
        })
    }

    handleChangeName = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    }
    handleCallback = (filterData) => {
        this.setState({ items: filterData })
    }

    handleEdit = () => {
        let data = {
            id: this.state.id,
            ...this.state
        }
        const updateData = this.items.map((u) => {
            if (u.id === data.id) {
                return data
            } else {
                return u
            }
        })

        this.setState({
            isEdit: false,
            name: '',
            id: '',
            password: '',
            items: updateData
        })
        console.log(this.handleEdit)
    }
    callbackFunction = (filterEditData) => {
        this.setState({
            id: filterEditData.id,
            name: filterEditData.name,
            password: filterEditData.password,
            isEdit: true
        })
        console.log(filterEditData)
    }


    render() {
        const isEdit = this.state.isEdit ? "Login" : "Update";

        return (
            <div >
                <div className='container'>
                    <h2>Login</h2>
                    <form>
                        <div>
                            <TextField
                                type="name"
                                name="name"
                                className='mt-3'
                                label='Name'
                                value={this.NewUsername}
                                onChange={this.handleChangeName}
                            />
                        </div>
                        <div>
                            <TextField
                                type="password"
                                label='Passowrd'
                                name="password"
                                className='my-4'
                                value={this.NewPassword}
                                onChange={this.handleChangeName}
                            />
                        </div>
                    </form>

                    <Button variant="outlined"
                        type="submit"
                        onClick={
                            this.state.isEdit
                                ? this.handleDataSubmit
                                : this.handleEdit
                        }
                        className="mt-3"
                    >
                        Login
                    </Button>
                    {
                        <Table items={this.state.items} callback={this.handleCallback} callbackEdit={this.callbackFunction} />
                    }
                </div>

            </div >
        );
    }
}

export default LoginForm;