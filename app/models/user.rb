class User < ApplicationRecord
  has_secure_password
  belongs_to :client

  validates :client_id, presence: true
  validates :email, presence: true
end
