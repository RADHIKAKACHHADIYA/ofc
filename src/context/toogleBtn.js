
import React, { Component } from 'react';
import { ThemeContext } from './theme.context';

class ToogleBtn extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <button
              onClick={toggleTheme}
              style={{ backgroundColor: theme.background }}
            >
              Toggle Theme
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default ToogleBtn;