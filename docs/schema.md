# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
imageUrl       | string    | not null

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
album_id    | integer   | not null, foreign key, indexed
song_url    | string    | not null

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
imageUrl   | string    | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
artist_id   | integer   | not null, foreign key, indexed
imageUrl   | string    | not null

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed
imageUrl   | string    | not null

## follow
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique playlist_id (user can only follow a playlist once)
playlist_id | integer   | not null, foreign key, indexed
