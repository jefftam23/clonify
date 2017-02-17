```js
{
  session: {
    currentUser: {
      id: 1,
      username: "jtam"
    },
    errors: []
  },

  nowPlaying: {
      id: 23,
      name: "Cool Song Name",
      albumId: 1,
      artistId: 1,
      duration: '194', // seconds
      songUrl: http://mysong.here
  },

  allArtists: {
    1: {
      id: 1,
      name: 'Artist Name',
      imageUrl: http://artistimage.here
    },
    ...
  },

  artistDetails: {
    id: 1,
    name: 'Artist Name',
    imageUrl: http://artistimage.here,
    albums: {
      1: {
        id: 1,
        name: 'Album Name',
        imageUrl: http://albumimage.here
      },
      ...
    }
  },

  albumDetails: {
    id: 1,
    name: 'Album Name',
    imageUrl: http://image.here,
    artistId: 1,
    songs: {
      1: {
        id: 1,
        name: 'Song Name',
        duration: '203',
        songUrl: http://mysong.here
      },
      ...
    }
  },

  yourMusicPlaylists: {
    1: {
      id: 1,
      name: 'My Playlist 1',
      own: true, // don't show username if it's your own playlists
      username: 'jtam',
      imageUrl: 'http://playlistimage.here'
    },
    ...
  },

  playlistDetails: {
    id: 1,
    name: 'My Playlist 1',
    own: true, // only give edit powers if it's your own playlist
    username: 'jtam',
    followed: NULL, // can only follow/unfollow if another person's playlist
    songs: {
      ...
    }
  },

  allUsers: {
    1: {
      id: 1,
      username: 'jtam',
      imageUrl: 'http://useravatar.here',
    },
    ...
  },

  followedUsers: {
    2: {
      id: 2,
      username: 'aa-student',
      imageUrl: 'http://useravatar.here',
    },
    ...
  },

  userDetails: {
    id: 1,
    username: 'jtam',
    imageUrl: 'http://useravatar.here',
    playlists: {
      ...
    }
  }

}
```
