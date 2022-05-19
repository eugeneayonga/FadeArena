class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :appointment_date, null: false
      t.integer :client_id
      t.integer :barber_id
      t.integer :status_id, null: false, default: 1

      t.timestamps
    end
  end
end
