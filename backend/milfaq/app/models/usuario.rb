class Usuario < ActiveRecord::Base
	belongs_to :perfil

    has_many :problemas, dependent: :destroy
    has_many :respostas, dependent: :destroy    

	validates :nome, :sobrenome, :email, :perfil_id, presence: true
	validates :email, uniqueness: true, case_sensitive: false

	def nome_completo
		[nome,sobrenome].join(' ')
	end

end
