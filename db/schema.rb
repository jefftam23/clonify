# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170411223110) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "artist_id",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "playlist_follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["follower_id", "playlist_id"], name: "index_playlist_follows_on_follower_id_and_playlist_id", unique: true, using: :btree
    t.index ["follower_id"], name: "index_playlist_follows_on_follower_id", using: :btree
    t.index ["playlist_id"], name: "index_playlist_follows_on_playlist_id", using: :btree
  end

  create_table "playlist_listings", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "song_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id", "song_id"], name: "index_playlist_listings_on_playlist_id_and_song_id", unique: true, using: :btree
    t.index ["playlist_id"], name: "index_playlist_listings_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_playlist_listings_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "owner_id",           null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["owner_id"], name: "index_playlists_on_owner_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "album_id",           null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "audio_file_name"
    t.string   "audio_content_type"
    t.integer  "audio_file_size"
    t.datetime "audio_updated_at"
    t.integer  "duration"
    t.index ["album_id"], name: "index_songs_on_album_id", using: :btree
  end

  create_table "user_follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["followee_id"], name: "index_user_follows_on_followee_id", using: :btree
    t.index ["follower_id", "followee_id"], name: "index_user_follows_on_follower_id_and_followee_id", unique: true, using: :btree
    t.index ["follower_id"], name: "index_user_follows_on_follower_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["username", "session_token"], name: "index_users_on_username_and_session_token", unique: true, using: :btree
  end

end
