class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :active, :description
end
