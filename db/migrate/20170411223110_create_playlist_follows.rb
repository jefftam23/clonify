class CreatePlaylistFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_follows do |t|
      t.integer :follower_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end

    add_index :playlist_follows, :follower_id
    add_index :playlist_follows, :playlist_id
    add_index :playlist_follows, [:follower_id, :playlist_id], unique: true
  end
end
