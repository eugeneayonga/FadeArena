class AddAppointmentIdToAppointmentStatuses < ActiveRecord::Migration[7.0]
  def change
    add_column :appointment_statuses, :appointment_id, :integer
  end
end
