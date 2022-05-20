class CreateBarbersServices < ActiveRecord::Migration[7.0]
  def change
    create_table :barbers_services do |t|
      t.integer :barber_id
      t.integer :service_id

      t.timestamps
    end
  end
end
