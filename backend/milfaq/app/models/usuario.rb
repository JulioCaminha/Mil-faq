class Usuario < ActiveRecord::Base
	belongs_to :perfil
	validates :nome, :sobrenome, :email, presence: true
	validates :email, uniqueness: true


	def nome_completo
		"#{nome} #{sobrenome}"
	end

end
