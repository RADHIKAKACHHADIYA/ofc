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
        }
    }
    // componentDidMount = () => {
    //     fetch("")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json,
    //             });
    //         })
    // }
    componentDidMount = () => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                const items = response.data;
                this.setState({ items });
            })
            .catch((error) => {
                this.setState({errorMsg: error.message})
                console.error('There was an error!', error);
            });
        // axios.post("https://jsonplaceholder.typicode.com/posts", this.state.objectData)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         this.setState({errorMsg: error.message})
        //         console.error('There was an error!', error);
        //       });
        //         const obData = {
        //             method: 'POST',
        //             headers: {},
        //             body: JSON.stringify({ title: 'post' })

        //         };
        //         fetch('https://gorest.co.in/public/v2/users', obData)
        //             .then(response => response.json())
        //             .then(data => this.setState({ postId: data.id }));
        // console.log(obData)
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
        this.setState({
            name: "",
            email: "",
            gender: "",
            status: "",
        })
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
        console.log("filterEditData : ", filterEditData.name, filterEditData.email)
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
