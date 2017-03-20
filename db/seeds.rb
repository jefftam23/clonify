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

# guest = User.create({ username: 'guest', password: 'password' })
#
# def seed_image(type, file_name)
#   File.open(File.join(Rails.root, "/app/assets/images/seeds/#{type}/#{file_name}"))
# end
#
# def seed_audio(file_name)
#   File.open(File.join(Rails.root, "/app/assets/songs/#{file_name}"))
# end
#
# artists = [
#   {name: 'Weezer', image: seed_image(ARTISTS, 'weezer.jpg')},
#   {name: 'Jack Johnson', image: seed_image(ARTISTS, 'jack_johnson.jpg')},
#   {name: 'Radiohead', image: seed_image(ARTISTS, 'radiohead.jpg')},
#   {name: 'Muse', image: seed_image(ARTISTS, 'muse.jpg')},
#   {name: 'Haddaway', image: seed_image(ARTISTS, 'haddaway.jpg')},
#   {name: 'Jackson 5', image: seed_image(ARTISTS, 'jackson_5.jpg')},
#   {name: 'Eagles', image: seed_image(ARTISTS, 'eagles.jpg')},
#   {name: 'The Four Seasons', image: seed_image(ARTISTS, 'the_four_seasons.jpg')},
#   {name: 'The Strokes', image: seed_image(ARTISTS, 'the_strokes.jpg')},
#   {name: 'The Black Keys', image: seed_image(ARTISTS, 'the_black_keys.jpg')},
#   {name: 'Dexter Britain', image: seed_image(ARTISTS, 'dexter_britain.jpg')},
#   {name: 'Fleslit', image: seed_image(ARTISTS, 'fleslit.jpg')},
#   {name: 'Little Glass Men', image: seed_image(ARTISTS, 'little_glass_men.png')},
#   {name: 'Pipe Choir', image: seed_image(ARTISTS, 'pipe_choir.jpg')},
#   {name: 'Psychadelik Pedestrian', image: seed_image(ARTISTS, 'psychadelik_pedestrian.jpg')},
#   {name: 'Rocco Granata', image: seed_image(ARTISTS, 'rocco_granata.jpg')},
#   {name: 'Syntactic', image: seed_image(ARTISTS, 'syntactic.jpg')},
#   {name: 'Ultrademon', image: seed_image(ARTISTS, 'ultrademon.JPG')},
# ]
#
# artists.each do |attributes|
#   Artist.create!(attributes)
# end
#
# albums = [
#   {name: 'Weezer (Blue Album)', image: seed_image(ALBUMS, 'weezer_blue_album.png'), artist: Artist.find_by_name('Weezer')},
#   {name: 'Pinkerton', image: seed_image(ALBUMS, 'pinkerton.jpg'), artist: Artist.find_by_name('Weezer')},
#   {name: 'In Between Dreams', image: seed_image(ALBUMS, 'in_between_dreams.jpg'), artist: Artist.find_by_name('Jack Johnson')},
#   {name: 'The Album', image: seed_image(ALBUMS, 'the_album.jpg'), artist: Artist.find_by_name('Haddaway')},
#   {name: 'Creative Commons Volume. 5', image: seed_image(ALBUMS, 'creative_commons_volume._5.jpg'), artist: Artist.find_by_name('Dexter Britain')},
#   {name: 'Journey', image: seed_image(ALBUMS, 'journey.jpg'), artist: Artist.find_by_name('Fleslit')},
#   {name: 'The Age of Insignificance', image: seed_image(ALBUMS, 'the_age_of_insignificance.png'), artist: Artist.find_by_name('Little Glass Men')},
#   {name: 'Pipe Choir', image: seed_image(ALBUMS, 'pipe_choir.jpg'), artist: Artist.find_by_name('Pipe Choir')},
#   {name: 'Transient', image: seed_image(ALBUMS, 'transient.png'), artist: Artist.find_by_name('Psychadelik Pedestrian')},
#   {name: 'Works', image: seed_image(ALBUMS, 'works.jpg'), artist: Artist.find_by_name('Rocco Granata')},
#   {name: 'The Path', image: seed_image(ALBUMS, 'the_path.png'), artist: Artist.find_by_name('Syntactic')},
#   {name: 'ST', image: seed_image(ALBUMS, 'st.jpg'), artist: Artist.find_by_name('Ultrademon')},
# ]
#
# albums.each do |attributes|
#   Album.create!(attributes)
# end
#
# songs = [
#   {name: 'In the Garage', audio: seed_audio('In the Garage.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
#   {name: 'Say It Ain\'t So', audio: seed_audio('Say It Ain\'t So.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
#   {name: 'Only in Dreams', audio: seed_audio('Only in Dreams.mp3'), album: Album.find_by_name('Weezer (Blue Album)')},
#   {name: 'The Good Life', audio: seed_audio('The Good Life.mp3'), album: Album.find_by_name('Pinkerton')},
#   {name: 'No Other Way', audio: seed_audio('No Other Way.mp3'), album: Album.find_by_name('In Between Dreams')},
#   {name: 'Do You Remember', audio: seed_audio('Do You Remember.mp3'), album: Album.find_by_name('In Between Dreams')},
#   {name: 'Better Together', audio: seed_audio('Better Together.mp3'), album: Album.find_by_name('In Between Dreams')},
#   {name: 'What Is Love', audio: seed_audio('What Is Love.mp3'), album: Album.find_by_name('The Album')},
#   {name: 'In The Electric Fields', audio: seed_audio('In The Electric Fields.mp3'), album: Album.find_by_name('Creative Commons Volume. 5')},
#   {name: 'The Time To Run (Finale)', audio: seed_audio('The Time To Run (Finale).mp3'), album: Album.find_by_name('Creative Commons Volume. 5')},
#   {name: 'Journey', audio: seed_audio('Journey.mp3'), album: Album.find_by_name('Journey')},
#   {name: 'Zone', audio: seed_audio('Zone.mp3'), album: Album.find_by_name('Journey')},
#   {name: 'Conviction', audio: seed_audio('Conviction.mp3'), album: Album.find_by_name('The Age of Insignificance')},
#   {name: 'I Dare You', audio: seed_audio('I Dare You.mp3'), album: Album.find_by_name('The Age of Insignificance')},
#   {name: 'A Dark Blue Arc', audio: seed_audio('A Dark Blue Arc.mp3'), album: Album.find_by_name('Pipe Choir')},
#   {name: 'Lights Up', audio: seed_audio('Lights Up.mp3'), album: Album.find_by_name('Pipe Choir')},
#   {name: 'Coral Reef', audio: seed_audio('Coral Reef.mp3'), album: Album.find_by_name('Transient')},
#   {name: 'Spectre', audio: seed_audio('Spectre.mp3'), album: Album.find_by_name('Transient')},
#   {name: 'Life', audio: seed_audio('Life.mp3'), album: Album.find_by_name('Works')},
#   {name: 'Lullaby', audio: seed_audio('Lullaby.mp3'), album: Album.find_by_name('Works')},
#   {name: 'The Path', audio: seed_audio('The Path.mp3'), album: Album.find_by_name('The Path')},
#   {name: 'Time Again', audio: seed_audio('Time Again.mp3'), album: Album.find_by_name('The Path')},
#   {name: 'Ultra Neuf Trois', audio: seed_audio('Ultra Neuf Trois.mp3'), album: Album.find_by_name('ST')},
# ]
#
# songs.each do |attributes|
#   Song.create!(attributes)
# end
#
# playlist1 = Playlist.create!({name: 'Cool Playlist', owner_id: 1})
# playlist2 = Playlist.create!({name: 'Another one', owner_id: 1})
# playlist3 = Playlist.create!({name: 'The Third', owner_id: 1})
# playlist4 = Playlist.create!({name: 'Fourth', owner_id: 1})
#
# playlist_listings = [
#   {playlist_id: playlist1.id, song_id: Song.find_by_name('In the Garage').id},
#   {playlist_id: playlist1.id, song_id: Song.find_by_name('Say It Ain\'t So').id},
#   {playlist_id: playlist1.id, song_id: Song.find_by_name('The Good Life').id},
#   {playlist_id: playlist1.id, song_id: Song.find_by_name('The Path').id},
#   {playlist_id: playlist1.id, song_id: Song.find_by_name('Spectre').id},
#   {playlist_id: playlist2.id, song_id: Song.find_by_name('Better Together').id},
#   {playlist_id: playlist2.id, song_id: Song.find_by_name('Only in Dreams').id},
#   {playlist_id: playlist2.id, song_id: Song.find_by_name('Journey').id},
#   {playlist_id: playlist3.id, song_id: Song.find_by_name('No Other Way').id},
#   {playlist_id: playlist3.id, song_id: Song.find_by_name('Do You Remember').id},
#   {playlist_id: playlist3.id, song_id: Song.find_by_name('Life').id},
#   {playlist_id: playlist3.id, song_id: Song.find_by_name('Lullaby').id},
#   {playlist_id: playlist4.id, song_id: Song.find_by_name('In The Electric Fields').id},
#   {playlist_id: playlist4.id, song_id: Song.find_by_name('The Time To Run (Finale)').id},
#   {playlist_id: playlist4.id, song_id: Song.find_by_name('A Dark Blue Arc').id},
#   {playlist_id: playlist4.id, song_id: Song.find_by_name('Zone').id},
#   {playlist_id: playlist4.id, song_id: Song.find_by_name('Lights Up').id},
# ]
#
# playlist_listings.each do |attributes|
#   PlaylistListing.create!(attributes)
# end

artists = [
  {name: "Broke For Free", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/artist.jpg"},
  {name: "Dexter Britain", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/artist.jpg"},
  {name: "Fleslit", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/artist.jpg"},
  {name: "Little Glass Men", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/artist.png"},
  {name: "Pipe Choir", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/artist.jpg"},
  {name: "Podington Bear", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/artist.jpg"},
  {name: "Psychadelik Pedestrian", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/artist.jpg"},
  {name: "Rocco Granata", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/artist.jpg"},
  {name: "Syntactic", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/artist.jpg"},
  {name: "The Kyoto Connection", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/artist.png"},
]

artists.each do |attributes|
  Artist.create!(attributes)
end

albums = [
  {name: "Gold Can Stay", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/Broke_For_Free_-_Gold_Can_Stay/cover.jpg", artist: Artist.find_by_name("Broke For Free")},
  {name: "Creative Commons Volume 5", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/cover.jpg", artist: Artist.find_by_name("Dexter Britain")},
  {name: "Journey", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/cover.jpg", artist: Artist.find_by_name("Fleslit")},
  {name: "The Age of Insignificance", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/cover.png", artist: Artist.find_by_name("Little Glass Men")},
  {name: "Pipe Choir", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/cover.jpg", artist: Artist.find_by_name("Pipe Choir")},
  {name: "Electronic", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/cover.jpg", artist: Artist.find_by_name("Podington Bear")},
  {name: "Springtime", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/cover.jpg", artist: Artist.find_by_name("Podington Bear")},
  {name: "Transient", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/cover.png", artist: Artist.find_by_name("Psychadelik Pedestrian")},
  {name: "Works", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/cover.jpg", artist: Artist.find_by_name("Rocco Granata")},
  {name: "The Path", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/cover.png", artist: Artist.find_by_name("Syntactic")},
  {name: "Kyoto Soundscapes", image: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/cover.jpg", artist: Artist.find_by_name("The Kyoto Connection")},
]

albums.each do |attributes|
  Album.create!(attributes)
end

songs = [
  {name: "Budding", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/Broke_For_Free_-_Gold_Can_Stay/Broke_For_Free_-_01_-_Budding.mp3", album: Album.find_by_name("Gold Can Stay")},
  {name: "942 Miles", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/Broke_For_Free_-_Gold_Can_Stay/Broke_For_Free_-_02_-_942_Miles.mp3", album: Album.find_by_name("Gold Can Stay")},
  {name: "The Gold Lining", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/Broke_For_Free_-_Gold_Can_Stay/Broke_For_Free_-_03_-_The_Gold_Lining.mp3", album: Album.find_by_name("Gold Can Stay")},
  {name: "Things To Come", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Broke+For+Free/Broke_For_Free_-_Gold_Can_Stay/Broke_For_Free_-_04_-_Things_To_Come.mp3", album: Album.find_by_name("Gold Can Stay")},

  {name: "The Time To Run (Finale)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_01_-_The_Time_To_Run_Finale.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "In The Electric Fields", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_03_-_In_The_Electric_Fields.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "The War In My Head", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_05_-_The_War_In_My_Head.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Safe In Glass Houses", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_06_-_Safe_In_Glass_Houses.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Losing Love", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_07_-_Losing_Love.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Running Through Tunnels", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_08_-_Running_Through_Tunnels.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Going Under", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_09_-_Going_Under.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Together In The Empty", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_10_-_Together_In_The_Empty.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "The Fresh Monday", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_11_-_The_Fresh_Monday.mp3", album: Album.find_by_name("Creative Commons Volume 5")},
  {name: "Telling Stories", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Dexter+Britain/Dexter_Britain_-_Creative_Commons_Volume_5/Dexter_Britain_-_12_-_Telling_Stories.mp3", album: Album.find_by_name("Creative Commons Volume 5")},

  {name: "Journey", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_01_-_Journey.mp3", album: Album.find_by_name("Journey")},
  {name: "Zone", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_02_-_Zone.mp3", album: Album.find_by_name("Journey")},
  {name: "Fresh & Filthy", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_03_-_Fresh__Filthy.mp3", album: Album.find_by_name("Journey")},
  {name: "Mind Games", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_04_-_Mind_Games.mp3", album: Album.find_by_name("Journey")},
  {name: "Elevated", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_05_-_Elevated.mp3", album: Album.find_by_name("Journey")},
  {name: "TTM (They Tell Me)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_06_-_TTM_They_Tell_Me.mp3", album: Album.find_by_name("Journey")},
  {name: "The Vibe", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_07_-_The_Vibe.mp3", album: Album.find_by_name("Journey")},
  {name: "Lay Low", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_08_-_Lay_Low.mp3", album: Album.find_by_name("Journey")},
  {name: "Cold Start", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_09_-_Cold_Start.mp3", album: Album.find_by_name("Journey")},
  {name: "HK Stuntin", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_10_-_HK_Stuntin.mp3", album: Album.find_by_name("Journey")},
  {name: "Immortal", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_11_-_Immortal.mp3", album: Album.find_by_name("Journey")},
  {name: "In It to Win It", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_12_-_In_It_to_Win_It.mp3", album: Album.find_by_name("Journey")},
  {name: "L's", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_13_-_Ls.mp3", album: Album.find_by_name("Journey")},
  {name: "Calm Flight", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_14_-_Calm_Flight.mp3", album: Album.find_by_name("Journey")},
  {name: "Yummy", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_15_-_Yummy.mp3", album: Album.find_by_name("Journey")},
  {name: "12:01 AM", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_16_-_1201_AM.mp3", album: Album.find_by_name("Journey")},
  {name: "MIA", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_17_-_MIA.mp3", album: Album.find_by_name("Journey")},
  {name: "A1 Symphony", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Fleslit/Fleslit_-_Journey/Fleslit_-_18_-_A1_Symphony.mp3", album: Album.find_by_name("Journey")},

  {name: "Conviction", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_01_-_Conviction.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "I Dare You", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_02_-_I_Dare_You.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "The Meadow", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_03_-_The_Meadow.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "The Age of Insignificance", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_04_-_The_Age_of_Insignificance.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Logrhythm", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_05_-_Logrhythm.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Poolside", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_06_-_Poolside.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Spray paint it Gold", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_07_-_Spray_paint_it_Gold.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Meet the Filter", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_08_-_Meet_the_Filter.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "The Renaissance Man", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_09_-_The_Renaissance_Man.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Rewire Your Cables", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_10_-_Rewire_Your_Cables.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Lost Forever", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_11_-_Lost_Forever.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Black Riders Anthem", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_12_-_Black_Riders_Anthem.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "No Particular Reason", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_13_-_No_Particular_Reason.mp3", album: Album.find_by_name("The Age of Insignificance")},
  {name: "Open Door", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Little+Glass+Men/Little_Glass_Men_-_The_Age_of_Insignificance/Little_Glass_Men_-_14_-_Open_Door.mp3", album: Album.find_by_name("The Age of Insignificance")},

  {name: "Lights Up", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_01_-_Lights_Up.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "A Dark Blue Arc", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_02_-_A_Dark_Blue_Arc.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "5 Station 5", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_03_-_5_Station_5.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "The Wind Is Rising", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_04_-_The_Wind_Is_Rising.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "Mettle", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_05_-_Mettle.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "Savior", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_06_-_Savior.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "Infinite Light", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_07_-_Infinite_Light.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "Sonzis FM", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_08_-_Sonzis_FM.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "On Axis", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_09_-_On_Axis.mp3", album: Album.find_by_name("Pipe Choir")},
  {name: "Dream On", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Pipe+Choir/Pipe+Choir/Pipe_Choir_-_10_-_Dream_On.mp3", album: Album.find_by_name("Pipe Choir")},

  {name: "Am-Trans", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Am-Trans.mp3", album: Album.find_by_name("Electronic")},
  {name: "Bass Rider", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Bass_Rider.mp3", album: Album.find_by_name("Electronic")},
  {name: "Bouncing Ball", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Bouncing_Ball.mp3", album: Album.find_by_name("Electronic")},
  {name: "Chrome Muffler", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Chrome_Muffler.mp3", album: Album.find_by_name("Electronic")},
  {name: "Conveyor Belt", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Conveyor_Belt.mp3", album: Album.find_by_name("Electronic")},
  {name: "Irish Club", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Irish_Club.mp3", album: Album.find_by_name("Electronic")},
  {name: "Rubber Robot", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Rubber_Robot.mp3", album: Album.find_by_name("Electronic")},
  {name: "Rumbleseat", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Rumbleseat.mp3", album: Album.find_by_name("Electronic")},
  {name: "The Dirty", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_The_Dirty.mp3", album: Album.find_by_name("Electronic")},
  {name: "Transit Center", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Electronic/Podington_Bear_-_Transit_Center.mp3", album: Album.find_by_name("Electronic")},

  {name: "Just Watching", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Just_Watching.mp3", album: Album.find_by_name("Springtime")},
  {name: "Pure Swell", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Pure_Swell.mp3", album: Album.find_by_name("Springtime")},
  {name: "Sidecar", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Sidecar.mp3", album: Album.find_by_name("Springtime")},
  {name: "Spring Comes Early", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Spring_Comes_Early.mp3", album: Album.find_by_name("Springtime")},
  {name: "Springtime", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Springtime.mp3", album: Album.find_by_name("Springtime")},
  {name: "T Shirt Weather", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_T_Shirt_Weather.mp3", album: Album.find_by_name("Springtime")},
  {name: "Transmogrify", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Transmogrify.mp3", album: Album.find_by_name("Springtime")},
  {name: "Trellis", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Trellis.mp3", album: Album.find_by_name("Springtime")},
  {name: "Golden Hour", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Podington+Bear/Podington_Bear_-_Springtime/Podington_Bear_-_Golden_Hour.mp3", album: Album.find_by_name("Springtime")},

  {name: "Spectre", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_01_-_Spectre.mp3", album: Album.find_by_name("Transient")},
  {name: "Upside Down (feat. Snowflake)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_02_-_Upside_Down_feat_Snowflake.mp3", album: Album.find_by_name("Transient")},
  {name: "Tears In My Heart (album mix)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_03_-_Tears_In_My_Heart_album_mix.mp3", album: Album.find_by_name("Transient")},
  {name: "Twist Turn Slide", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_04_-_Twist_Turn_Slide.mp3", album: Album.find_by_name("Transient")},
  {name: "Cry Over You (black moon mix feat. Suzi Q. Smith)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_05_-_Cry_Over_You_black_moon_mix_feat_Suzi_Q_Smith.mp3", album: Album.find_by_name("Transient")},
  {name: "Restroom (feat. Snowflake)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_06_-_Restroom_feat_Snowflake.mp3", album: Album.find_by_name("Transient")},
  {name: "World Of Fantasy (album mix)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_07_-_World_Of_Fantasy_album_mix.mp3", album: Album.find_by_name("Transient")},
  {name: "Druids March", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_08_-_Druids_March.mp3", album: Album.find_by_name("Transient")},
  {name: "Coral Reef", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_09_-_Coral_Reef.mp3", album: Album.find_by_name("Transient")},
  {name: "Solidarity (dub mix)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Psychadelik+Pedestrian/Psychadelik_Pedestrian_-_Transient/Psychadelik_Pedestrian_-_10_-_Solidarity_dub_mix.mp3", album: Album.find_by_name("Transient")},

  {name: "Life", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_01_-_Life.mp3", album: Album.find_by_name("Works")},
  {name: "Lullaby", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_02_-_Lullaby.mp3", album: Album.find_by_name("Works")},
  {name: "Undead", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_03_-_Undead.mp3", album: Album.find_by_name("Works")},
  {name: "Haka", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_04_-_Haka.mp3", album: Album.find_by_name("Works")},
  {name: "Lost Memories", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_05_-_Lost_Memories.mp3", album: Album.find_by_name("Works")},
  {name: "A Young Man", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_06_-_A_Young_Man.mp3", album: Album.find_by_name("Works")},
  {name: "Arise", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_07_-_Arise.mp3", album: Album.find_by_name("Works")},
  {name: "Cry of Love", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_08_-_Cry_of_Love.mp3", album: Album.find_by_name("Works")},
  {name: "Earth", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_09_-_Earth.mp3", album: Album.find_by_name("Works")},
  {name: "Without You", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_10_-_Without_You.mp3", album: Album.find_by_name("Works")},
  {name: "Lost Memories (piano and cello vrs)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Rocco+Granata/Rocco_Granata_-_Works/Rocco_Granata_-_11_-_Lost_Memories_piano_and_cello_vrs.mp3", album: Album.find_by_name("Works")},

  {name: "The Path", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_01_-_The_Path.mp3", album: Album.find_by_name("The Path")},
  {name: "Time Again", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_02_-_Time_Again.mp3", album: Album.find_by_name("The Path")},
  {name: "My Way", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_03_-_My_Way.mp3", album: Album.find_by_name("The Path")},
  {name: "Remainders", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_04_-_Remainders.mp3", album: Album.find_by_name("The Path")},
  {name: "Traceline", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_05_-_Traceline.mp3", album: Album.find_by_name("The Path")},
  {name: "The New Circle", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_06_-_The_New_Circle.mp3", album: Album.find_by_name("The Path")},
  {name: "Clockwork (Outro)", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/Syntactic/Syntactic_-_The_Path/Syntactic_-_07_-_Clockwork_Outro.mp3", album: Album.find_by_name("The Path")},

  {name: "Water", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_01_-_Water.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "The city", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_02_-_The_city.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Meditation I", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_03_-_Meditation_I.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Alone in the station", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_04_-_Alone_in_the_station.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Kyoto no oto", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_05_-_Kyoto_no_oto.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "The next stop is", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_06_-_The_next_stop_is.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Meditation Ii", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_07_-_Meditation_Ii.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Ikigai", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_08_-_Ikigai.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
  {name: "Uro Uro", audio: "https://s3.amazonaws.com/clonify-pro/seeds/artists/The+Kyoto+Connection/The_Kyoto_Connection_-_Kyoto_Soundscapes/The_Kyoto_Connection_-_09_-_Uro_Uro.mp3", album: Album.find_by_name("Kyoto Soundscapes")},
]

songs.each do |attributes|
  Song.create!(attributes)
end

playlist1 = Playlist.create!({name: 'First Playlist!', owner_id: 1})
playlist2 = Playlist.create!({name: 'Another one', owner_id: 1})
playlist3 = Playlist.create!({name: 'The Third', owner_id: 1})
playlist4 = Playlist.create!({name: 'Fourth', owner_id: 1})

playlist_listings = [
  {playlist_id: playlist1.id, song_id: Song.find_by_name("Budding").id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name("The Time To Run (Finale)").id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name("Journey").id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name("Conviction").id},
  {playlist_id: playlist1.id, song_id: Song.find_by_name("Lights Up").id},

  {playlist_id: playlist2.id, song_id: Song.find_by_name("A Dark Blue Arc").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("The city").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("Time Again").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("Lullaby").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("Pure Swell").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("Bass Rider").id},
  {playlist_id: playlist2.id, song_id: Song.find_by_name("I Dare You").id},

  {playlist_id: playlist3.id, song_id: Song.find_by_name("My Way").id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name("The Meadow").id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name("Fresh & Filthy").id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name("The War In My Head").id},
  {playlist_id: playlist3.id, song_id: Song.find_by_name("Sidecar").id},

  {playlist_id: playlist4.id, song_id: Song.find_by_name("Alone in the station").id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name("Remainders").id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name("Chrome Muffler").id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name("Safe In Glass Houses").id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name("Mind Games").id},
  {playlist_id: playlist4.id, song_id: Song.find_by_name("The Wind Is Rising").id},
]

playlist_listings.each do |attributes|
  PlaylistListing.create!(attributes)
end
