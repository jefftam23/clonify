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
- `GET /api/users/:id/playlists`
  - get all of the playlists that this user owns but does not follow
- `POST /api/users/:id/playlists`
- `PATCH /api/users/:id/playlists`
- `DELETE /api/users/:id/playlists`
  - **NOTE:** need to protect against users modifying other users' playlists
- `GET /api/users/:id/playlists/:id`


### Follows
- `GET /api/users/:id/follows`
  - get all of the playlists that this user follows but does not own
- `POST /api/follows`
- `DELETE /api/follows/:id`
