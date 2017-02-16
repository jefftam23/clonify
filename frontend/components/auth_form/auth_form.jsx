import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/browse");
    }
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirectIfLoggedIn());
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "password"
    };
    this.props.processForm(user).then(() => this.redirectIfLoggedIn());
  }

  render() {
    const { errors, processForm, formType } = this.props;

    const submitText = ( formType === "signup" ) ?
      "SIGN UP" :
      "LOGIN";
    const questionText = ( formType === "signup" ) ?
      "Already have an account? " :
      "Don't have an account? ";
    const linkText = ( formType === "signup" ) ?
      "Log in here." :
      "Sign up here!";
    const linkPath = ( formType === "signup" ) ?
      "/login" :
      "/signup";

    const errorListItems = (
      errors.map((error, idx) => {
        return (
          <li className="error">
            { error }
          </li>
        );
      })
    );

    const errorList = (
      <ul>
        {
          errorListItems
        }
      </ul>
    );

    const guestLoginButton = (
      <button
        onClick={ this.handleGuestLogin }
        className="green-button">
        GUEST LOGIN
      </button>
    );

    return (
      <div className="auth-form-wrapper">
        <img
          className="clonify-logo"
          src={ window.images.clonifyLogo } />

        { errorList }

        <form onSubmit={ this.handleSubmit }>

          { (formType === "login") ? guestLoginButton : "" }

          <label htmlFor="input-username">Username</label>
            <input
              id="input-username"
              type="text"
              placeholder="Clonify username"
              onChange={ this.update('username') }
              value={ this.state.username } />

          <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              type="password"
              placeholder="Password"
              onChange={ this.update('password') }
              value={ this.state.password } />

          <input
            type="submit"
            value={ submitText }
            className="transparent-button" />

        </form>
        <div className="auth-footer">
          { questionText }
          <Link to={ linkPath }>{ linkText }</Link>
        </div>
      </div>
    );
  }
}

export default AuthForm;
