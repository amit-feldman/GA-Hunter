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
                  <IndexLink to="/projects">Projects</IndexLink>
                </li>
              </ul>
            </div>
            <div className="navbar-right">
              <ul className="list-inline">
                <li>
                  <Link to="/projects/new" className="btn btn-danger">
                    <i className="fa fa-plus" />
                    &nbsp;
                    New Project
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li><span className="pipe">|</span></li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-left">
                <ul className="list-inline">
                  <li>
                    &copy; 2016 GA-Hunter.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-right">
                <ul className="list-inline">
                  <li>
                    Made With <i className="fa fa-heart animate pulse loop" /> in New York
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
