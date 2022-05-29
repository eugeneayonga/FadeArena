class Client < ApplicationRecord
  has_many :appointments
  has_many :barbers, through: :appointments
  has_one :client_address
  has_one :user
  has_many :orders

  validates :first_name, presence: true, length: { maximum: 25 }
  validates :last_name, length: { maximum: 50 }
  validates :phone_number, length: { is: 10 }, format: { with: /\d{9}/ }, presence: true
end
