class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :appointment_id
      t.integer :client_id

      t.timestamps
    end
  end
end
