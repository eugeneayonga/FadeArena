class OrderSerializer < ActiveModel::Serializer
  attributes :id, :appointment_id, :client_id
end
