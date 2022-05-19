class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :address_id
end
