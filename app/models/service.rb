class Service < ApplicationRecord
  has_many :barbers_services
  has_many :barbers, through: :barbers_services
end
