class CreateAppointmentsServicesTable < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments_services do |t|
      t.integer :appointment_id
      t.integer :service_id
      t.timestamps
    end
  end
end
