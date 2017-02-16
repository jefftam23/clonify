import { values } from 'lodash';

export const selectAllArtists = ({ allArtists }) => {
  return values(allArtists);
};
