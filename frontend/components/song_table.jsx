import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import SongRow from './song_row';
import { fetchSongDetails } from '../actions/song_actions';


const SongTable = (props) => {
  const songs = values(props.songs);
  const rowFetchSongDetails = props.fetchSongDetails;

  const songRows = songs.map((song, idx) => {
    return (
      <SongRow
        song={ song }
        key={ idx }
        rowFetchSongDetails={ rowFetchSongDetails } />
    );
  });

  return (
    <table className="song-table">
      <tbody>
        <tr className="st-header-row">
          <th></th>
          <th>Song</th>
          <th></th>
        </tr>
        {
          songRows
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    songs: ownProps.songs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSongDetails: (id) => dispatch(fetchSongDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongTable);
