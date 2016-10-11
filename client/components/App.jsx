import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark">
          <div className="container-fluid">
            <img src="./img/ga-logo.svg" alt="GA Logo" className="ga-logo" />
            <Link to="/" className="navbar-brand">Hunter</Link>
            <div className="navbar-left">
              <ul className="list-inline">
                <li>
                  <IndexLink to="/">Home</IndexLink>
                </li>
                <li>
                  <IndexLink to="/">Projects</IndexLink>
                </li>
              </ul>
            </div>
            <div className="navbar-right">
              <ul className="list-inline">
                <li>
                  <Link to="/" className="btn btn-danger btn-nav">
                    <i className="fa fa-plus" />
                    &nbsp;
                    New Project
                  </Link>
                </li>
                <li>
                  <IndexLink to="#">Login</IndexLink>
                </li>
                <li><span className="pipe">|</span></li>
                <li>
                  <IndexLink to="#">Register</IndexLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
