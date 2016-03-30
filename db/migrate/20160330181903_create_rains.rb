class CreateRains < ActiveRecord::Migration
  def change
    create_table :rains do |t|
      t.datetime :time_info
      t.integer :season_id
      t.float :amount_in_inches

      t.timestamps null: false
    end
  end
end
