class CreateRainfalls < ActiveRecord::Migration
  def change
    create_table :rainfalls do |t|
      t.datetime :rainfall_date
      t.float :amount_in_inches

      t.timestamps null: false
    end
  end
end
