class AddAppointmentsStatusIdToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :appointments_status_id, :integer, default: 1
  end
end
