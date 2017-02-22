# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
- `GET /api/songs/:id`
- `GET /api/albums/:id/songs`
  - get all the songs of a certain album

### Artists

- `GET /api/artists`
- `GET /api/artists/:id`

### Albums

- `GET /api/albums`
- `GET /api/albums/:id`
- `GET /api/artists/:id/albums`
  - get all the albums that belong to this artist

### Playlists
- `GET /api/playlists`
  - get all of the current user's playlists
- `POST /api/playlists`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`
  - **NOTE:** need to protect against users modifying other users' playlists
- `GET /api/playlists/:id`


### Follows
- `GET /api/users/:id/follows`
  - get all of the playlists that this user follows but does not own
- `POST /api/follows`
- `DELETE /api/follows/:id`
