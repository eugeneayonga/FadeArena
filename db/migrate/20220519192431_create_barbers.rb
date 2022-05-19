class CreateBarbers < ActiveRecord::Migration[7.0]
  def change
    create_table :barbers do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.date :start_date
      t.float :wage, null: false, default: 7.5
      t.integer :station, null: false, default: 0
      t.string :profile_img

      t.timestamps
    end
  end
end
