class Barber < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments
  has_many :barbers_services
  has_many :services, through: :barbers_services

  validates :wage, comparison: { greater_than: 7.50 }
end
