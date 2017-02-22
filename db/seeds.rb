# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ARTISTS = 'artists'
ALBUMS = 'albums'
SONGS = 'songs'

Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all

guest = User.create({ username: 'guest', password: 'password' })

def seed_image(type, file_name)
  File.open(File.join(Rails.root, "/app/assets/images/seeds/#{type}/#{file_name}"))
end

def seed_audio(file_name)
  File.open(File.join(Rails.root, "/app/assets/songs/#{file_name}"))
end

artists = [
  {name: 'Weezer', image: seed_image(ARTISTS, 'weezer.jpg')},
  {name: 'Jack Johnson', image: seed_image(ARTISTS, 'jack_johnson.jpg')},
  {name: 'Radiohead', image: seed_image(ARTISTS, 'radiohead.jpg')},
  {name: 'Muse', image: seed_image(ARTISTS, 'muse.jpg')},
  {name: 'Haddaway', image: seed_image(ARTISTS, 'haddaway.jpg')},
  {name: 'Jackson 5', image: seed_image(ARTISTS, 'jackson_5.jpg')},
  {name: 'Eagles', image: seed_image(ARTISTS, 'eagles.jpg')},
  {name: 'The Four Seasons', image: seed_image(ARTISTS, 'the_four_seasons.jpg')},
  {name: 'The Strokes', image: seed_image(ARTISTS, 'the_strokes.jpg')},
  {name: 'The Black Keys', image: seed_image(ARTISTS, 'the_black_keys.jpg')},
]

artists.each do |attributes|
  Artist.create!(attributes)
end

albums = [
  {name: 'Weezer (Blue Album)', image: seed_image(ALBUMS, 'weezer_blue_album.png'), artist: Artist.find_by_name('Weezer')},
  {name: 'Pinkerton', image: seed_image(ALBUMS, 'pinkerton.jpg'), artist: Artist.find_by_name('Weezer')},
  {name: 'In Between Dreams', image: seed_image(ALBUMS, 'in_between_dreams.jpg'), artist: Artist.find_by_name('Jack Johnson')},
]

albums.each do |attributes|
  Album.create!(attributes)
end

songs = [
  {name: 'In the Garage', audio: seed_audio('In the Garage.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
  {name: 'Say It Ain\'t So', audio: seed_audio('Say It Ain\'t So.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
  {name: 'Only in Dreams', audio: seed_audio('Only in Dreams.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
  {name: 'The Good Life', audio: seed_audio('The Good Life.mp3'), album: Album.find_by_name('Pinkerton')},
  {name: 'No Other Way', audio: seed_audio('No Other Way.mp3'), album: Album.find_by_name('In Between Dreams')},
  {name: 'Do You Remember', audio: seed_audio('Do You Remember.mp3'), album: Album.find_by_name('In Between Dreams')},
  {name: 'Better Together', audio: seed_audio('Better Together.mp3'), album: Album.find_by_name('In Between Dreams')},
]

songs.each do |attributes|
  Song.create!(attributes)
end

playlist1 = Playlist.create!({name: 'Cool Playlist', owner_id: 1})
playlist2 = Playlist.create!({name: 'Another one', owner_id: 1})
playlist3 = Playlist.create!({name: 'The Third', owner_id: 1})

playlist_listings = [
  {playlist_id: playlist1.id, song_id: Song.find_by_name('In the Garage').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('Say It Ain\'t So').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('The Good Life').id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name('Better Together').id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name('Only in Dreams').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('No Other Way').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('Do You Remember').id},
]

playlist_listings.each do |attributes|
  PlaylistListing.create!(attributes)
end
