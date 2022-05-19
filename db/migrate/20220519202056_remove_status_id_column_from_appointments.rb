class RemoveStatusIdColumnFromAppointments < ActiveRecord::Migration[7.0]
  def change
    remove_column :appointments, :status_id
  end
end
