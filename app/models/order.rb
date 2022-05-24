class Order < ApplicationRecord
  belongs_to :appoinment
  belongs_to :client
end
