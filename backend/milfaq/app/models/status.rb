class Status < ActiveRecord::Base
	validates :descricao, presence: true
end
