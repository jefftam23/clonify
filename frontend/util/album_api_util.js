export const fetchAlbumDetails = (id) => {
  return $.ajax({
    type: 'GET',
    url: `/api/albums/${id}`
  });
};
