# Clonify

[Clonify live][heroku]

[heroku]: http://www.clonifyapp.com

## Minimum Viable Product

Clonify is a web application inspired by Spotify built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] Song playing
- [x] Continuous play while navigating site
- [x] Playlist CRUD
- [ ] Playlist following
- [ ] User following

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Songs, Artists, and Albums Models, APIs, and components (2 days)

**Objective:** Songs, artists, and albums are sufficiently seeded with corresponding attachments (song or image urls) and users can navigate through the 'Browse' section of the application.

### Phase 3: Audio Player Sidebar (2 days)

**Objective:** Users can play music while navigating different parts of the site.

### Phase 4: Playlists CRUD (2 day)

**Objective:** Playlists belong to users and can be created, viewed, updated, and destroyed.

### Phase 5: Playlist and User Follows (1 day)

**Objective:** Users can follow other users and other users' playlists.

### Bonus Features (TBD)
- [ ] Search songs, artists, albums, and playlists.
- [ ] Play queue with shuffle and repeat
- [ ] Radio (shuffle play)
- [ ] Explore Page
