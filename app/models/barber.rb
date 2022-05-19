class Barber < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments

  validates :wage, comparison: { greater_than: 7.50 }
end
