class RenameTableAppointmentStatusesToAppointmentsStatuses < ActiveRecord::Migration[7.0]
  def change
    rename_table :appointment_statuses, :appointments_statuses
  end
end
