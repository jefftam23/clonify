export const fetchSongDetails = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/songs/${id}`
  });
};
