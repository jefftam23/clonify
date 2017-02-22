export const fetchPlaylists = () => {
  return $.ajax({
    type: 'GET',
    url: `/api/playlists`
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
//
// export const updateUserPlaylist = (userId, playlist) => {
//   return $.ajax({
//     type: 'PATCH',
//     url: `/api/users/${userId}/playlists/${playlist.id}`,
//     data: { playlist }
//   });
// };
