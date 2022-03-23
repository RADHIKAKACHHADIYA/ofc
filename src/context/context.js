import React, { Component } from 'react';
import Context1 from './context_1';
import { Provider } from './themeContext';

class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            theme: 'Light'
        }
    }

    handleChangeTheme = () => {
        this.setState({ 
            theme: this.state.theme === 'Light' ? 'Dark' : 'Light', 
            value: this.state.theme === 'Light' ? this.state.value + 1 : this.state.value
        })
    }
    
    render() {
        const contexData = {
            data: this.state,
            handleClick: this.handleChangeTheme
        }
        return (
            <div  className="container text-center">
                <Provider value={contexData}>
                    <div className='d-flex'>    
                        <Context1 />
                    </div>
                </Provider>
            </div>
        );
    }
}

export default Context;