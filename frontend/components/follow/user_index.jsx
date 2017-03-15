import React from 'react';
import { values } from 'lodash';
import UserIndexItem from './user_index_item';
import LoadingIcon from '../loading_icon';

class UserIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="main-content">
          <LoadingIcon />
        </div>
      );
    }

    const userIndexItems = values(this.props.users).map((user, idx) => {
      return (
        <UserIndexItem
          key={ idx }
          user={ user }
          createUserFollow={ this.props.createUserFollow }
          deleteUserFollow={ this.props.deleteUserFollow } />
      );
    });

    return (
      <div className="user-index-wrapper">
        <ul className="user-list">
          {
            userIndexItems
          }
        </ul>
      </div>
    );
  }
}

export default UserIndex;
