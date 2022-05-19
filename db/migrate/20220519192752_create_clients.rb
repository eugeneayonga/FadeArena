class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.integer :address_id

      t.timestamps
    end
  end
end
