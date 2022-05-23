class BarberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_img

  has_many :appointments
  has_many :clients
  has_many :barbers_services
end
