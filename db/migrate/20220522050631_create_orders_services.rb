class CreateOrdersServices < ActiveRecord::Migration[7.0]
  def change
    create_table :orders_services do |t|
      t.integer :order_id
      t.integer :service_id

      t.timestamps
    end
  end
end
