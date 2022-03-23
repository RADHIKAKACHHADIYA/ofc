import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Context2 extends Component {
    render() {
        return (
            <div className='container text-center mt-5'>
                <div className='row py-5 text-center'>
                    <div className='col-6'>
                        <NavLink to="/context" className=" text-dark">
                            Context-1
                        </NavLink>
                    </div>
                    <div className='col-6'>
                        <NavLink to="/context2" className=" ms-3 ">
                            Context-2
                        </NavLink>
                    </div>
                </div>
                <h3>This is Contex 2</h3>
            </div>
        );
    }
}

export default Context2;