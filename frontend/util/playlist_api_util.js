export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    type: 'GET',
    url: `/api/users/${userId}/playlists`
  });
};

export const createUserPlaylist = (userId, playlist) => {
  return $.ajax({
    type: 'POST',
    url: `/api/users/${userId}/playlists`,
    data: { playlist }
  });
};
