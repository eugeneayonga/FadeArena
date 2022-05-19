class BarberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :start_date, :wage, :station, :profile_img
end
