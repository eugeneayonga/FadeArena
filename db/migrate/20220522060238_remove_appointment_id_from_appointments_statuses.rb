class RemoveAppointmentIdFromAppointmentsStatuses < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments_statuses, :appointment_id
  end
end
