import React from 'react';
import { values } from 'lodash';
import UserIndexItem from './user_index_item';


class UserIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    const userIndexItems = values(this.props.users).map((user, idx) => {
      return (
        <UserIndexItem
          key={ idx }
          user={ user } />
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
