class Problema < ActiveRecord::Base
	validates :descricao, :status, :relator, presence: true
end
