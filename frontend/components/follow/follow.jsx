import React from 'react';

class Follow extends React.Component {
  componentWillMount() {
    this.props.receiveActiveNavItem();
  }

  render() {
    return (
      <div className="main-content">
        <h1>Follow</h1>
      </div>
    );
  }
}

export default Follow;
