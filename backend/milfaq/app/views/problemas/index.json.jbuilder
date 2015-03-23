json.array!(@problemas) do |problema|
  json.extract! problema, :id, :descricao, :resposta, :status_id, :usuario_id, :created_at
  json.url problema_url(problema, format: :json)
end
