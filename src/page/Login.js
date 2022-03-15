import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import Table from './Table';

//let arrayData = [];
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            items: []
        }
    }

    handleDataSubmit = (e) => {
        e.preventDefault();
        
        let object1 = {
            id: Math.floor((Math.random() * 100) + 1),
            name: this.state.name,
            password: this.state.password
        };
        // let oData = JSON.stringify([...object]),
        // values = JSON.parse(oData).map(d => d[1]);
        // console.log(values)
        
        this.state.items.push(object1)

        this.setState({
            name: '',
            password: '',
        })
        console.log('arrayData :', this.state.items)
    }

    handleCallback = (filterData) => {
        this.setState({ items: filterData })
    }

    callbackEdit = (filterData) => {
        this.setState({ name: filterData.name , password: filterData.password})
    }
    handleChangeName = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
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

                    <Button variant="outlined" type="submit" onClick={this.handleDataSubmit} className="mt-3">
                        Login
                    </Button>
                    {
                        <Table items={this.state.items} callback={this.handleCallback} callbackEdit={this.handleCallback1}/>
                    }
                </div>

            </div >
        );
    }
}

export default LoginForm;