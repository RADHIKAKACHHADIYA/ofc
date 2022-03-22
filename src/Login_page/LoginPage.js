import { Button } from '@mui/material';
import axios from 'axios';
import React, { Component, createRef } from 'react';
import TableData from './TableData';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.nameref = createRef();
        this.emailref = createRef();
        this.genderref = createRef();
        this.statusref = createRef();
        this.state = {
            items: [],
            isEdit: false,
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }

        this.toggleTheme = (themes) => {
            this.setState(state => ({
               theme :
                state.theme === themes.dark
                  ? this.props.themes.light
                  : this.props.themes.dark,
            }));
          };
    }
    componentDidMount = () => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                const items = response.data;
                this.setState({ items });
            })
            .catch((error) => {
                this.setState({ errorMsg: error.message })
                console.error('There was an error!', error);
            });
    }

    handleDataSubmit = () => {
        let objectData = {
            id: Math.floor((Math.random() * 100) + 1),
            name: this.nameref.current.value,
            email: this.emailref.current.value,
            gender: this.genderref.current.value,
            status: this.statusref.current.value,
        };
        this.state.items.push(objectData)

        axios.post("https://jsonplaceholder.typicode.com/posts", objectData)
            .then((response) => {
                const dataPost = response.items;
                this.setState({ 
                    dataPost ,
                    name: "",
                    email: "",
                    gender: "",
                    status: ""
                });
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    "error": error
                });
                console.error('There was an error!', error);
            });
    };

    handleChangeName = () => {
        this.setState({
            name: this.nameref.current.value,
            email: this.emailref.current.value,
            gender: this.genderref.current.value,
            status: this.statusref.current.value
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
            email: '',
            gender: '',
            status: '',
        })
    }

    callbackFunction = (filterEditData) => {
        this.setState({
            id: filterEditData.id,
            name: filterEditData.name,
            email: filterEditData.email,
            gender: filterEditData.gender,
            status: filterEditData.status,
            isEdit: true
        })
        // console.log("filterEditData : ", filterEditData.name, filterEditData.email)
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Login</h2>
                    <form>
                        <div>
                            <input
                                type="text"
                                name="name"
                                className='mt-3'
                                placeholder="name"
                                value={this.state.name}
                                onChange={this.handleChangeName}
                                ref={this.nameref}
                            />
                            <input
                                type="email"
                                name="email"
                                className='my-4'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.handleChangeName}
                                ref={this.emailref}
                            />
                        </div>
                        <input
                            type="text"
                            name="gender"
                            className='my-4'
                            placeholder='Gender'
                            value={this.state.gender}
                            onChange={this.handleChangeName}
                            ref={this.genderref}
                        />
                        <input
                            type="text"
                            name="status"
                            className='my-4'
                            placeholder='status'
                            value={this.state.status}
                            onChange={this.handleChangeName}
                            ref={this.statusref}
                        />
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
