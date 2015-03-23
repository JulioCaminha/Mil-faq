class Problema < ActiveRecord::Base
	belongs_to :usuario
	belongs_to :status
	
	validates :descricao, :status_id, :usuario_id, presence: true
end
