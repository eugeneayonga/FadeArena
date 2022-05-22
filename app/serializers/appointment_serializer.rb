class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date, :client_id, :barber_id

  has_one :appointments_status
  belongs_to :client
  belongs_to :barber
end
