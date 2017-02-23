import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import SongRow from './song_row';
import { fetchSongDetails } from '../actions/song_actions';
import { fetchPlaylists,
         createPlaylistListing,
         deletePlaylistListing } from '../actions/playlist_actions';

class SongTable extends React.Component {
  componentDidMount() {
    // make sure the yourMusicPlaylists slice of state is populated
    // so that the song dropdown menu has access to them
    this.props.fetchPlaylists();
  }

  render() {
    const songs = values(this.props.songs);

    const songRows = songs.map((song, idx) => {
      return (
        <SongRow
          song={ song }
          key={ idx }
          playlists={ this.props.playlists }
          fetchSongDetails={ this.props.fetchSongDetails }
          deletePlaylistListing={ this.props.deletePlaylistListing }
          createPlaylistListing={ this.props.createPlaylistListing }
          playlistView={ this.props.playlistView } />
      );
    });

    return (
      <table className="song-table">
        <tbody>
          <tr className="st-header-row">
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th></th>
            <th>Time</th>
          </tr>
          {
            songRows
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: ownProps.songs,
    playlists: state.yourMusicPlaylists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchSongDetails: (id) => dispatch(fetchSongDetails(id)),
    deletePlaylistListing: (id) => dispatch(deletePlaylistListing(id)),
    createPlaylistListing: (listing) => dispatch(createPlaylistListing(listing))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongTable);
