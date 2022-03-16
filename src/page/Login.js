import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import Table from './Table';
let tepmArray = []
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            items: [],
            isEdit: false
        }
    }

    handleDataSubmit = (e) => {

        console.log()
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

    handleEdit = (id)  => {

        let data = {
            "id": this.state.id,
            ...this.state
        }
    
       let updateData = this.state.items.map((e , i) => {
            if(e.id === data.id) {
               return data 
            } else {
               return e
            }
        })

        this.setState({ items: updateData, isEdit: true, name: '', password: '' })
    
    }

    callbackFunction = (filterEditData) => {
        console.log(filterEditData)
        console.log(this.state.items)

        // item 

        this.setState({
            id: filterEditData.id,
            name: filterEditData.name,
            password: filterEditData.password,
            isEdit: true
        })
        console.log("callbackFunction : ", filterEditData.name, filterEditData.password)
    }


    render() {

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
                                value={this.state.name}
                                onChange={this.handleChangeName}
                            />
                        </div>
                        <div>
                            <TextField
                                type="password"
                                label='Passowrd'
                                name="password"
                                className='my-4'
                                value={this.state.password}
                                onChange={this.handleChangeName}
                            />
                        </div>
                    </form>

                    <Button variant="outlined"
                        type="submit"
                        onClick={this.state.isEdit ? this.handleEdit : this.handleDataSubmit}
                        className="mt-3"
                    >
                        login
                    </Button>
                    {
                        this.state.items &&
                        <Table items={this.state.items} callback={this.handleCallback} callbackEdit={this.callbackFunction} />
                    }
                </div>

            </div >
        );
    }
}

export default LoginForm;