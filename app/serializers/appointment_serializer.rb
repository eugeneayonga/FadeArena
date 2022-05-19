class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date, :client_id, :barber_id, :status_id
end
