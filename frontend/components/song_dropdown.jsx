import React from 'react';
import { values } from 'lodash';

class SongDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: false };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    const nextState = !this.state.display;
    this.setState({ display: nextState });
  }

  render() {
    const { songId,
            listingId,
            playlists,
            fetchSongDetails,
            deletePlaylistListing,
            createPlaylistListing,
            playlistView } = this.props;

    let playlistArr = [];
    if (Boolean(playlists)){
      playlistArr = values(playlists);
    }

    // get the yourMusicPlaylists slice of state
    // If it hasn't yet been populated, fetch them
    const addToPlaylistButtons = playlistArr.map((playlist, idx) => {
      const listing = { playlist_id: playlist.id, song_id: songId };

      return (
        <li key={ idx }>
          <button
            onClick={ () => createPlaylistListing(listing) }>&nbsp;
              <span>Add to { playlist.name }</span>
          </button>
        </li>
      );
    });

    const deleteButton = (
      <li>
        <button
          onClick={ () => deletePlaylistListing(listingId) }>&nbsp;
            <span>Delete</span>
        </button>
      </li>
    );

    let menu;
    if (this.state.display) {
      menu = (
        <ul>
          <li>
            <button
              onClick={ () => fetchSongDetails(songId) }>&nbsp;
                <span>Play</span>
            </button>
          </li>

          { addToPlaylistButtons }

          { playlistView ? deleteButton : "" }
        </ul>
      );
    } else {
      menu = (
        <ul></ul>
      );
    }

    return (
      <div className="song-dropdown">
        <button onClick={ this.toggleDisplay }>...</button>
        { menu }
      </div>
    );
  }

}

export default SongDropdown;
