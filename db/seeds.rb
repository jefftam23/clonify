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
  {name: 'Dexter Britain', image: seed_image(ARTISTS, 'dexter_britain.jpg')},
  {name: 'Fleslit', image: seed_image(ARTISTS, 'fleslit.jpg')},
  {name: 'Little Glass Men', image: seed_image(ARTISTS, 'little_glass_men.png')},
  {name: 'Pipe Choir', image: seed_image(ARTISTS, 'pipe_choir.jpg')},
  {name: 'Psychadelik Pedestrian', image: seed_image(ARTISTS, 'psychadelik_pedestrian.jpg')},
  {name: 'Rocco Granata', image: seed_image(ARTISTS, 'rocco_granata.jpg')},
  {name: 'Syntactic', image: seed_image(ARTISTS, 'syntactic.jpg')},
  {name: 'Ultrademon', image: seed_image(ARTISTS, 'ultrademon.JPG')},
]

artists.each do |attributes|
  Artist.create!(attributes)
end

albums = [
  {name: 'Weezer (Blue Album)', image: seed_image(ALBUMS, 'weezer_blue_album.png'), artist: Artist.find_by_name('Weezer')},
  {name: 'Pinkerton', image: seed_image(ALBUMS, 'pinkerton.jpg'), artist: Artist.find_by_name('Weezer')},
  {name: 'In Between Dreams', image: seed_image(ALBUMS, 'in_between_dreams.jpg'), artist: Artist.find_by_name('Jack Johnson')},
  {name: 'The Album', image: seed_image(ALBUMS, 'the_album.jpg'), artist: Artist.find_by_name('Haddaway')},
  {name: 'Creative Commons Volume. 5', image: seed_image(ALBUMS, 'creative_commons_volume._5.jpg'), artist: Artist.find_by_name('Dexter Britain')},
  {name: 'Journey', image: seed_image(ALBUMS, 'journey.jpg'), artist: Artist.find_by_name('Fleslit')},
  {name: 'The Age of Insignificance', image: seed_image(ALBUMS, 'the_age_of_insignificance.png'), artist: Artist.find_by_name('Little Glass Men')},
  {name: 'Pipe Choir', image: seed_image(ALBUMS, 'pipe_choir.jpg'), artist: Artist.find_by_name('Pipe Choir')},
  {name: 'Transient', image: seed_image(ALBUMS, 'transient.png'), artist: Artist.find_by_name('Psychadelik Pedestrian')},
  {name: 'Works', image: seed_image(ALBUMS, 'works.jpg'), artist: Artist.find_by_name('Rocco Granata')},
  {name: 'The Path', image: seed_image(ALBUMS, 'the_path.png'), artist: Artist.find_by_name('Syntactic')},
  {name: 'ST', image: seed_image(ALBUMS, 'st.jpg'), artist: Artist.find_by_name('Ultrademon')},
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
  {name: 'What Is Love', audio: seed_audio('What Is Love.mp3'), album: Album.find_by_name('The Album')},
  {name: 'In The Electric Fields', audio: seed_audio('In The Electric Fields.mp3'), album: Album.find_by_name('Creative Commons Volume. 5')},
  {name: 'The Time To Run (Finale)', audio: seed_audio('The Time To Run (Finale).mp3'), album: Album.find_by_name('Creative Commons Volume. 5')},
  {name: 'Journey', audio: seed_audio('Journey.mp3'), album: Album.find_by_name('Journey')},
  {name: 'Zone', audio: seed_audio('Zone.mp3'), album: Album.find_by_name('Journey')},
  {name: 'Conviction', audio: seed_audio('Conviction.mp3'), album: Album.find_by_name('The Age of Insignificance')},
  {name: 'I Dare You', audio: seed_audio('I Dare You.mp3'), album: Album.find_by_name('The Age of Insignificance')},
  {name: 'A Dark Blue Arc', audio: seed_audio('A Dark Blue Arc.mp3'), album: Album.find_by_name('Pipe Choir')},
  {name: 'Lights Up', audio: seed_audio('Lights Up.mp3'), album: Album.find_by_name('Pipe Choir')},
  {name: 'Coral Reef', audio: seed_audio('Coral Reef.mp3'), album: Album.find_by_name('Transient')},
  {name: 'Spectre', audio: seed_audio('Spectre.mp3'), album: Album.find_by_name('Transient')},
  {name: 'Life', audio: seed_audio('Life.mp3'), album: Album.find_by_name('Works')},
  {name: 'Lullaby', audio: seed_audio('Lullaby.mp3'), album: Album.find_by_name('Works')},
  {name: 'The Path', audio: seed_audio('The Path.mp3'), album: Album.find_by_name('The Path')},
  {name: 'Time Again', audio: seed_audio('Time Again.mp3'), album: Album.find_by_name('The Path')},
  {name: 'Ultra Neuf Trois', audio: seed_audio('Ultra Neuf Trois.mp3'), album: Album.find_by_name('ST')},
]

songs.each do |attributes|
  Song.create!(attributes)
end

playlist1 = Playlist.create!({name: 'Cool Playlist', owner_id: 1})
playlist2 = Playlist.create!({name: 'Another one', owner_id: 1})
playlist3 = Playlist.create!({name: 'The Third', owner_id: 1})
playlist4 = Playlist.create!({name: 'Fourth', owner_id: 1})

playlist_listings = [
  {playlist_id: playlist1.id, song_id: Song.find_by_name('In the Garage').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('Say It Ain\'t So').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('The Good Life').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('The Path').id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name('Spectre').id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name('Better Together').id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name('Only in Dreams').id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name('Journey').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('No Other Way').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('Do You Remember').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('Life').id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name('Lullaby').id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name('In The Electric Fields').id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name('The Time To Run (Finale)').id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name('A Dark Blue Arc').id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name('Zone').id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name('Lights Up').id},
]

playlist_listings.each do |attributes|
  PlaylistListing.create!(attributes)
end
