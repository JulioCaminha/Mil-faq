json.extract! @usuario, :id, :nome, :sobrenome, :nome_completo, :email, :perfil_id, :created_at, :updated_at

json.perfil do
	json.id @usuario.perfil.id
	json.descricao @usuario.perfil.descricao
end


