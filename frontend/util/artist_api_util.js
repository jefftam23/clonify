export const fetchAllArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists'
  });
};
