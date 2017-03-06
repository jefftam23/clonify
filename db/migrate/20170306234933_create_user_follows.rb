class CreateUserFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :user_follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false

      t.timestamps
    end

    add_index :user_follows, :follower_id
    add_index :user_follows, :followee_id
    add_index :user_follows, [:follower_id, :followee_id], unique: true
  end
end
