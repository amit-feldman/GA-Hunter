import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      course: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const stateObj = {};
    const stateKey = e.target.name;

    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const url = 'http://localhost:3000/api/signup';
    const { name, email, password, course } = this.state;

    if (name && email && password && course) {
      request.post(url)
      .send({
        name: name,
        email: email,
        password: password,
        course: course,
      })
      .end(() => {
        this.props.router.push('/');
      });
    } else {
      alert('You must fill out all forms to sign up!');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Registration</h2>
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
                name="email"
                type="email"
                className="form-control no-radius"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Select your Class</label>
              <select
                name="course"
                onChange={this.handleChange}
                className="form-control class-select"
                id="course"
                defaultValue="0"
              >
                <option disabled value="0">choose course...</option>
                <option value="WDI">WDI</option>
                <option value="UXDI">UXDI</option>
                <option value="Data Science">Data Science</option>
                <option value="iOS Development">iOS Development</option>
                <option value="Android Development">Android Development</option>
              </select>
            </div>
            <button
              className="btn btn-danger btn-switch btn-lg btn-block"
              onClick={this.handleSubmit}
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

// <input
//   name="course"
//   type="text"
//   className="form-control no-radius"
//   onChange={this.handleChange}
//   placeholder="Course"
//   required
// />
