class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date

  # has_one :appointments_status
  belongs_to :client
  belongs_to :barber
end
