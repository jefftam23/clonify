import React from 'react';
import UserIndexContainer from './user_index_container';

class Follow extends React.Component {
  componentWillMount() {
    this.props.receiveActiveNavItem();
  }

  render() {
    return (
      <div className="main-content">
        <h1>Follow</h1>

        <UserIndexContainer />
      </div>
    );
  }
}

export default Follow;
