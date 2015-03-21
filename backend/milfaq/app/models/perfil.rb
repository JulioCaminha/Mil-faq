class Perfil < ActiveRecord::Base
	validates :descricao, presence: true, uniqueness: true
end
