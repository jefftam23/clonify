import React from 'react';
import { values } from 'lodash';

class PlaylistUpdateDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      name: this.props.name
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.updatePlaylist = this.updatePlaylist.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  toggleDisplay() {
    const nextState = !this.state.display;
    this.setState({ display: nextState });
  }

  updatePlaylist(e) {
    e.preventDefault();
    this.toggleDisplay()
    this.props.update({
      id: this.props.playlistId,
      name: this.state.name
    })
  }

  updateName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  render() {
    let menu;
    if (this.state.display) {
      menu = (
        <form onSubmit={ this.updatePlaylist }>
          <ul>
            <li>
              <input
                type="text"
                defaultValue={ this.props.name }
                onChange={ this.updateName } />
            </li>

            <li>
              <input type="submit" value="RENAME" />
            </li>
          </ul>
        </form>
      );
    } else {
      menu = (
        <div></div>
      );
    }

    return (
      <div className="playlist-update-dropdown">
        <button onClick={ this.toggleDisplay }>...</button>
        { menu }
      </div>
    );
  }

}

export default PlaylistUpdateDropdown;
