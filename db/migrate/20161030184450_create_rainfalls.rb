class CreateRainfalls < ActiveRecord::Migration
  def change
    create_table :rainfalls do |t|
      t.float :amount_in_inches, null: false
      t.integer :month, null: false
      t.integer :day, null: false
      t.integer :year, null: false
      t.string :hours, array: true, default: []

      t.timestamps null: false
    end
  end
end
