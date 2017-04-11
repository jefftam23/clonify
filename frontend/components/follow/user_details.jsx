import React from 'react';
import UserHeader from './user_header';
import LoadingIcon from '../loading_icon';
import PlaylistIndex from './playlist_index';

class UserDetails extends React.Component {
  componentDidMount() {
    this.props.receiveActiveNavItem();
    this.props.fetchUserDetails(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
      this.props.fetchUserDetails(newProps.userId);
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <LoadingIcon />
      );
    }

    const { id,
            imageUrl,
            username,
            followId,
            follower,
            ownPlaylists } = this.props.userDetails;

    return (
      <div className="main-content">
        <UserHeader
          id={ id }
          name={ username }
          imageUrl={ imageUrl }
          followId={ followId }
          follower={ follower }
          deleteUserFollow={ this.props.deleteUserFollow }
          createUserFollow={ this.props.createUserFollow } />

        <PlaylistIndex
          title="Own Playlists"
          playlists={ ownPlaylists } />

        {
          // <PlaylistIndex title="Followed Playlists" playlists={ followedPlaylists } />
        }
      </div>
    );
  }
}

export default UserDetails;
