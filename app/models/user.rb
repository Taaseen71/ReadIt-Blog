class User < ApplicationRecord
  
    has_secure_password

    validates :username, presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 3, maximum: 10}
    validates :email, presence: true, uniqueness: {case_sensitive: false}
    validates :email, format: {with:  URI::MailTo::EMAIL_REGEXP}
    validates :password, length: {minimum: 6}

    has_many :articles, dependent: :destroy
    has_many :comments, dependent: :destroy
end
