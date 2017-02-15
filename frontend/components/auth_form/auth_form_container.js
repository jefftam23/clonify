import { connect } from 'react-redux';
import { login, logout, signup, receiveCurrentUser } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveCurrentUser(null)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
