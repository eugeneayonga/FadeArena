class Appointment < ApplicationRecord
  belongs_to :barber
  belongs_to :client
  has_one :appointments_status
end
