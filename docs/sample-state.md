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
      album_id: 1,
      artist_id: 1,
      duration: '194', // seconds
      song_url: http://mysong.here
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
    artist_id: 1,
    songs: {
      1: {
        id: 1,
        name: 'Song Name',
        duration: '203',
        song_url: http://mysong.here
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
      avatar_url: 'http://useravatar.here',
    },
    ...
  },

  followedUsers: {
    2: {
      id: 2,
      username: 'aa-student',
      avatar_url: 'http://useravatar.here',
    },
    ...
  },

  userDetails: {
    id: 1,
    username: 'jtam',
    avatar_url: 'http://useravatar.here',
    playlists: {
      ...
    }
  }

}
```
