import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      currentUser: null,
    };

    this.logIn = this.logIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.logIn();
  }

  logIn() {
    if (document.cookie) {
      this.setState({
        loggedIn: true,
      });
    }
  }
  setUser(uid) {
    console.log(uid);
    console.log('set user called');
    this.setState({
      currentUser: uid,
    });
    console.log(this.state);
    console.log('state consoled');
  }
  signOut() {
    request.post('api/signout')
    .then(() => {
      this.setState({
        loggedIn: false,
        currentUser: null,
      });
    });
  }

  loggedInLinks() {
    if (!this.state.loggedIn) {
      return (
        <ul className="list-inline">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li><span className="pipe">|</span></li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="list-inline">
        <li>
          <Link to="/projects/new" className="btn btn-danger btn-nav">
            <i className="fa fa-plus" />
            &nbsp;
            New Project
          </Link>
        </li>
        <li>
          <Link
            onClick={this.signOut}
            className="btn btn-primary btn-outline btn-nav"
          >Logout
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { setUser: this.setUser,
        currentUser: this.state.currentUser });
    });
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
              {
                this.loggedInLinks()
              }
            </div>
          </div>
        </nav>
        <div>
          {childrenWithProps}
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
