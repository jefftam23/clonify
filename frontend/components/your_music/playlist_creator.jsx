import React from 'react';

class PlaylistCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state);
  }

  render() {
    return(
      <li className="playlist-creator">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            defaultValue="New Playlist"
            onChange={ this.update } />

          <input type="submit" value="Create"/>
        </form>
      </li>
    );
  }
}


export default PlaylistCreator;
