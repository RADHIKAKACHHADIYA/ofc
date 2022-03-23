import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from './themeContext';

class Context1 extends Component {
    render() {
        return (
            <div className='container text-center mt-5'>
                <div className='row py-5 text-center'>
                    <div className='col-6'>
                        <NavLink to="/context" className="ms-3">
                            Context-1
                        </NavLink>
                    </div>
                    <div className='col-6'>
                        <NavLink to="/context2" className=" ms-3">
                            Context-2
                        </NavLink>
                    </div>
                </div>
                <Consumer>
                    {
                        ({data, handleClick}) => {
                            console.log(data.theme)
                            return (
                                <div>
                                    <h4>{data.value} | {data.theme}</h4>
                                    <button onClick={handleClick} className="btn btn-dark mt-3">Click</button>
                                </div>
                            )
                        }
                    }
                </Consumer>
            </div>
        );
    }
}

export default Context1;