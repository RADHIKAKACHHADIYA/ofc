import { Button } from '@mui/material';
import React, { Component, createRef } from 'react';
import TableData from './TableData';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isEdit: false
        }
        this.textInput = createRef();
    }
    handleDataSubmit = () => {
        let objectData = {
            id: Math.floor((Math.random() * 100) + 1),
            name: this.textInput.current.name,
            password: this.textInput.current.password,
            value: this.state.value
        };
        this.state.items.push(objectData)
        console.log("objectData :: ", objectData)

        this.setState({
            name: '',
            password: '',
        })
        console.log(this.state.textInput)
    };
    
    handleChangeName = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        this.setState({
            textInput:  e.target.value,
            [name]: value
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
        this.setState({ items: updateData, isEdit: true, name: '', password: '' })
    }

    callbackFunction = (filterEditData) => {

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
            <div>
                <div className='container'>
                    <h2>Login</h2>
                    <form>
                        <div>
                            <input
                                type="name"
                                name="name"
                                className='mt-3'
                                value={this.state.name}
                                onChange={this.handleChangeName}
                                placeholder="Name"
                                ref={this.textInput}
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
                                ref={this.textInput}
                            />
                        </div>
                    </form>

                    <Button variant="outlined"
                        type="submit"
                        onClick={this.state.isEdit ? this.handleEdit : this.handleDataSubmit}
                        className="mt-3"
                    >
                       Login
                    </Button>
                    {
                        this.state.items &&
                        <TableData items={this.state.items} callback={this.handleCallback} callbackEdit={this.callbackFunction}  />
                    }
                </div>

            </div >
        );
    }
}

export default LoginPage;
