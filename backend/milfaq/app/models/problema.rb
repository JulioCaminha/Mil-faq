class Problema < ActiveRecord::Base
	
	belongs_to :usuario
	belongs_to :status

	has_many :respostas, dependent: :destroy
	
	validates :descricao, :status_id, :usuario_id, presence: true
end
