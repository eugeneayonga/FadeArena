class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :active, :current_stock, :total_sold
end
