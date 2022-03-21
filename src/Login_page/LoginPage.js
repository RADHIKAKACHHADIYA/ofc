import { Button } from '@mui/material';
import React, { Component, createRef } from 'react';
import TableData from './TableData';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.nameref = createRef();
        this.passwordref = createRef();
        this.state = {
            name: '',
            items: [],
            isEdit: false
        }
    }

    handleDataSubmit = () => {
        let objectData = {
            id: Math.floor((Math.random() * 100) + 1),
            name: this.nameref.current.value,
            password: this.passwordref.current.value,
        };
        this.state.items.push(objectData)
        this.setState({
            name: "",
            password: "",
        })
    };
    handleChangeName = () => {
        this.setState({
            name: this.nameref.current.value,
            password: this.passwordref.current.value
        });
    }
    
    handleCallback = (filterData) => {
        this.setState({ items: filterData })
    }
    handleEdit = () => {
        let data = {
            "id": this.state.id,
            ...this.state
        }
        let updateData = this.state.items.map((e) => {
            if (e.id === data.id) {
                return data
            } else {
                return e
            }
        })
        this.setState({
            items: updateData,
            isEdit: true,
            name: '',
            password: ''
        })
    }

    callbackFunction = (filterEditData) => {
        this.setState({
            id: filterEditData.id,
            name: filterEditData.name,
            password: filterEditData.password,
            isEdit: true
        })
        console.log("filterEditData : ", filterEditData.name, filterEditData.password)
    }
   

    render() {

        return (
            <div>
                <div className='container'>
                    <h2>Login</h2>
                    <form>
                        <div>
                            <input
                                type="name"
                                name="name"
                                className='mt-3'
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChangeName}
                                ref={this.nameref}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                className='my-4'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.handleChangeName}
                                ref={this.passwordref}
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
                        <TableData items={this.state.items} callback={this.handleCallback} callbackEdit={this.callbackFunction} />
                    }
                </div>

            </div >
        );
    }
}

export default LoginPage;
