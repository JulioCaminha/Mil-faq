class Resposta < ActiveRecord::Base
	belongs_to :problema
	belongs_to :usuario
end
