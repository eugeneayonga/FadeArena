class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :active, :current_stock
end
