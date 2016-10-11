import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-signin">
          <h5 className="form-signin-heading">Welcome Back!</h5>
          <div>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="email"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <button
            className="btn btn-danger btn-lg btn-switch btn-block"
          >Login
          </button>
        </div>
        <div className="form-group text-center">
          <Link to="/signup" className="nav-links">Signup</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
