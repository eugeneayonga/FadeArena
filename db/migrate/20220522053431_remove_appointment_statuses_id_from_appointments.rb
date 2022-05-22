class RemoveAppointmentStatusesIdFromAppointments < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :appointment_status_id
  end
end
