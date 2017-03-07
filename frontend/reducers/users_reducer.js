import { RECEIVE_ALL_USERS, receiveAllUsers } from '../actions/user_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return oldState;
  }
};

export default UsersReducer;
