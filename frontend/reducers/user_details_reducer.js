import { RECEIVE_USER_DETAILS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserDetailsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      return action.userDetails;

    default:
      return oldState;
  }
};

export default UserDetailsReducer;
