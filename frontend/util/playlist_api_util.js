export const fetchPlaylists = () => {
  return $.ajax({
    type: 'GET',
    url: `/api/playlists`
  });
};

export const fetchPlaylistDetails = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/playlists/${id}`
  });
};

export const createPlaylist = (playlist) => {
  return $.ajax({
    type: 'POST',
    url: `/api/playlists`,
    data: { playlist }
  });
};

export const deletePlaylist = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/playlists/${id}`
  });
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  });
};
