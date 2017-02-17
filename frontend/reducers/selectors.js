import { values } from 'lodash';

export const selectAllArtists = ({ allArtists }) => {
  return values(allArtists);
};

export const selectArtistAlbums = ({ artistDetails }) => {
  return values(artistDetails.albums);
};
