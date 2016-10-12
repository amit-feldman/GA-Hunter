import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      course: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  render() {
    return (
      <div className="container">
        <div className="form-signin">
          <h5 className="form-signin-heading">Registration</h5>
          <div id="register-form">
            <div className="form-group no-margin">
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                placeholder="Name"
                autoFocus
                required
              />
            </div>
            <div className="form-group no-margin">
              <input
                name="course"
                type="text"
                className="form-control no-radius"
                placeholder="Course"
                required
              />
            </div>
            <div className="form-group no-margin">
              <input
                name="email"
                type="email"
                className="form-control no-radius"
                placeholder="email"
                required
              />
            </div>
            <div className="form-group no-margin">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="password"
                required
              />
            </div>
            <button
              className="btn btn-danger btn-switch btn-lg btn-block"
            >Register
            </button>
          </div>
        </div>
        <div className="form-group text-center">
          <Link to="/login" className="nav-links">Login</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
