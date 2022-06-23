class AppointmentsService < ApplicationRecord
  belongs_to :appointment
  belongs_to :service

  def to_time_s
    appointment_date.strftime "%r"
  end

  def to_date_s
    appointment_date.strftime "%D"
  end
end
