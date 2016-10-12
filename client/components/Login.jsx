import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;

    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const url = 'http://localhost:3000/api/login';
    const { email, password } = this.state;

    request.post(url)
    .send({
      email: email,
      password: password,
    })
    .end(() => {
      this.props.router.push('/');
    });
  }

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
              onChange={this.handleChange}
              placeholder="email"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={this.handleChange}
              placeholder="password"
            />
          </div>
          <button
            className="btn btn-danger btn-lg btn-switch btn-block"
            onClick={this.handleSubmit}
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
