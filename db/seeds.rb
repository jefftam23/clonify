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

guest = User.create({ username: 'guest', password: 'password' })

def seed_image(type, file_name)
  File.open(File.join(Rails.root, "/app/assets/images/seeds/#{type}/#{file_name}"))
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
