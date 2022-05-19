class AddAppointmentStatusIdToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :appointment_status_id, :integer, null: false, default: 1
  end
end
