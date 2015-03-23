json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nome, :sobrenome, :nome_completo, :email, :perfil_id
  json.url usuario_url(usuario, format: :json)
 end
