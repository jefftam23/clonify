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
          <li>
            { error }
          </li>
        )
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
        onClick={ this.handleGuestLogin }>
        GUEST LOGIN
      </button>
    );

    return (
      <div className="auth-form">
        <h1>AUTH FORM</h1>

        { errorList }

        { (formType === "login") ? guestLoginButton : "" }

        <form onSubmit={ this.handleSubmit }>

          <br/>
          <label>Username<br/>
            <input
              type="text"
              onChange={ this.update('username') }
              value={ this.state.username } />
          </label>

          <br/>
          <label>Password<br/>
            <input
              type="password"
              onChange={ this.update('password') }
              value={ this.state.password } />
          </label>

          <br/>
          <input type="submit" value={ submitText }/>

        </form>
        <div>
          { questionText }
          <Link to={ linkPath }>{ linkText }</Link>
        </div>
      </div>
    );
  }
}

export default AuthForm;
