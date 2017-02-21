export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    type: 'GET',
    url: `/api/users/${userId}/playlists`
  });
};
