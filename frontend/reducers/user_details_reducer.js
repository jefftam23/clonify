import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserDetailsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return action.user;

    default:
      return oldState;
  }
};

export default UserDetailsReducer;
