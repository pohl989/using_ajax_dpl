class Game < ApplicationRecord
  has_many :charactors, dependent: :destroy
end
