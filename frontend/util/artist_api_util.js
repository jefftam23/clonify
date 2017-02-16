export const fetchAllArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists'
  });
};

export const fetchArtistDetails = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  });
};
