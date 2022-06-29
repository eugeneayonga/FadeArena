class Appointment < ApplicationRecord
  belongs_to :barber
  belongs_to :client
  has_one :appointments_status
  has_one :order

  validates :appointment_date, comparison: { greater_than: DateTime.now }
end
