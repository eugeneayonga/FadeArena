class User < ApplicationRecord
  has_secure_password
  belongs_to :client

  validates :client_id, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
