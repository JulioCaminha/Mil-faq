class Usuario < ActiveRecord::Base
	belongs_to :perfil
	validates :nome, :sobrenome, :email, :perfil_id, presence: true
	validates :email, uniqueness: true

	def nome_completo
		[nome,sobrenome].join(' ')
	end

end
