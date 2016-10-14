import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

const propTypes = {
  setUser: React.PropTypes.func,
};

class Login extends Component {
  constructor(props) {
    super(props);

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
    const url = '/api/login';
    const { email, password } = this.state;

    request.post(url)
    .send({
      email: email,
      password: password,
    })
    .then((res) => {
      const currentUser = res.body.id;
      console.log(currentUser);
      console.log('currentUser');
      console.log(this.props);
      this.props.setUser(currentUser);
    })
    .then(() => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Welcome Back!</h2>
          <div>
            <input
              name="email"
              type="email"
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

Login.propTypes = propTypes;

export default withRouter(Login);
