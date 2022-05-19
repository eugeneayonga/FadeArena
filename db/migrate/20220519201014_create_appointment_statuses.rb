class CreateAppointmentStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :appointment_statuses do |t|
      t.boolean :open, null: false, default: true
      t.string :description

      t.timestamps
    end
  end
end
